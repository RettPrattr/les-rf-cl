// Render Prop
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import MaskedInput from "react-text-mask";
import useWindowDimensions from '@/components/hooks/useWindowDimensions'
import { AllContexts } from '@/components/context/Context'

import { useState, useEffect, useContext } from 'react';

const title = 'Оставьте заявку'
const subtitle = 'Перезвоним Вам в ближайшее время и ответим на все вопросы!'

const phoneNumberMask = [
    "+", "7", " ",
    /[1-9]/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/
];


const schema = Yup.object({
    name: Yup.string()
        .min(3, 'Минимальное количество символов: 3')
        .required('Обязательное поле'),
    mobilephone: Yup.string()
        .min(16, 'Введите номер полностью')
        .required('Обязательное поле'),

})


const FormС = (props) => {

    const [submitDelay, setSumbitDelay] = useState()
    const [togglePopup, setTogglePopup] = useState(false)
    const [isSchemaValid, setIsSchemaValid] = useState(false)
    const [isSent, setIsSent] = useState(false)


    const [disableInput1, setDisableInput1] = useState(true)
    const [focused1, setFocused1] = useState(false)
    const onFocus1 = () => setFocused1(true)
    const onBlur1 = () => setFocused1(false)
    const [onBlurOnce1, setOnBlurOnce1] = useState(false)

    const [disableInput2, setDisableInput2] = useState(true)
    const [focused2, setFocused2] = useState(false)
    const onFocus2 = () => { setFocused2(true) }
    const onBlur2 = () => setFocused2(false)
    const [onBlurOnce2, setOnBlurOnce2] = useState(false)
    const [inputLabel2, setInputLabel2] = useState(true)

    const [disableInput3, setDisableInput3] = useState(true)

    const [disableInput4, setDisableInput4] = useState(true)
    const [width] = useWindowDimensions()

    useEffect(() => {
        const timerFirst = setTimeout(() => {
            setSumbitDelay(true)
        }, 3000);
        return () => clearTimeout(timerFirst);
    }, [])

    function scrollTo (block) {
        document.getElementById(block).scrollIntoView({ block: 'start' });
        width > 800 ? window.scrollBy(0, -60) : window.scrollBy(0, 0);
      }

    const { currentLand, setCurrentLand, currentProject, setCurrentProject } = useContext(AllContexts)


    const formik = useFormik({
        initialValues: {
            name: '',
            mobilephone: '',
        },
        validationSchema: schema,
        onSubmit: function (values) {
            const STRAPI_API = `${process.env.API_LINK}/api/form-requests`
            let message = `Новая заявка!\n\n<b>Имя:</b> ${values?.name}\n<b>Телефон:</b> ${values?.mobilephone}\n<b>Участок:</b> №${currentLand[0]?.number}\n<b>Проект:</b> ${currentProject[0]?.title}`

            axios.post(STRAPI_API,{
            	data: {
            		username: values?.name,
            		phoneNumber: values?.mobilephone,
                    land: `участок №${currentLand[0]?.number}`,
                    project: `${currentProject[0]?.title}`
            	}
            }).then((_) => {
                setIsSent(true)
                formik.values.name = ''
                formik.values.mobilephone = '' 
                axios.post('/api/tgbot', {message : message}) 
            })


        }
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisableInput1(false)
            setDisableInput2(false)
            setDisableInput3(false)
            setDisableInput4(false)
        }, 1000);
        return () => clearTimeout(timer);
    }, [])

    const handleSchemaValue = (nameForm, numberForm) => {

        const obj = {
            name: nameForm,
            mobilephone: numberForm,
        }

        setIsSchemaValid(schema.isValidSync(obj))
    }

    setTimeout(() => {
        submitDelay ? '' : setSumbitDelay(true)
    }, 3000);

    const submitBtnHandler = () => {
        setTogglePopup(!togglePopup)
    }

    return (
        <div id="form" className={"flex flex-col form my0 cd12" + (width > 800 ? ' pyl' : ' ptl pbm ')}>
            <div className={"flex flex-col container mb " + (width > 800 ? "cd12 cm4" : "")}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
            <form onSubmit={formik.handleSubmit} id="tg" className={'cd12 cm4 flex flex-wrap container' + (width > 800 ? " flex-row " : " flex-col ")}>
                <div className={'input-field cd4 cm4 relative mb ov-visible mtm' + (width > 800 ? ' pl0  ' : ' ')}>
                    <div className='input-container w-full relative'>

                        <input
                            disabled={disableInput1}
                            autoComplete="off"
                            type="text"
                            name="name"
                            id="name"
                            placeholder=" "
                            className={'' + (formik.errors.name && onBlurOnce1 === true ? ' invalid ' : ' ')}
                            onFocus={(e) => {
                                onFocus1(e)
                                setDisableInput2(true)
                                setDisableInput3(true)
                                setDisableInput4(true)
                            }}
                            onChange={(e) => {
                                formik.handleChange(e)
                                const timer = setTimeout(() => {
                                    handleSchemaValue(e.target.value, formik.values.mobilephone)
                                }, 100);
                                return () => clearTimeout(timer);
                            }
                            }
                            onBlur={(e) => {
                                onBlur1(e)
                                setDisableInput2(false)
                                setDisableInput3(false)
                                setDisableInput4(false)
                                setOnBlurOnce1(true)
                            }}
                            value={formik.values.name}
                        />
                        <label
                            className={(focused1 === false && formik.values.name === '' ? 'label ' : 'label animate ')}
                            htmlFor="name">
                            Имя
                        </label>
                    </div>
                </div>
                <div className={'input-field cd4 cm4 relative ov-visible mts' + (width > 800 ? "  mb " : ' mb ')}>
                    <div className='input-container w-full relative'>

                        <MaskedInput
                            disabled={disableInput2}
                            guide={false}
                            autoComplete="off"
                            mask={phoneNumberMask}
                            type="tel"
                            name="mobilephone"
                            id="mobilephone"
                            placeholder=" "
                            className={'' + (formik.errors.mobilephone && onBlurOnce2 === true ? ' invalid ' : ' ')}
                            onFocus={(e) => {
                                if (formik.values.mobilephone === "") {
                                    formik.values.mobilephone = "+7 "
                                    setInputLabel2(false)
                                }
                                onFocus2(e)
                                setDisableInput1(true)
                                setDisableInput3(true)
                                setDisableInput4(true)
                                

                            }}
                            onChange={(e) => {
                                formik.handleChange(e)
                                const timer = setTimeout(() => {
                                    handleSchemaValue(formik.values.name, e.target.value)
                                }, 100);
                                return () => clearTimeout(timer);
                            }
                            }
                            onBlur={(e) => {
                                onBlur2(e)
                                setDisableInput1(false)
                                setDisableInput3(false)
                                setDisableInput4(false)
                                setOnBlurOnce2(true)
                                setInputLabel2(true)
                            }}

                            value={formik.values.mobilephone.replace(/_/g, " ")}
                        />              
                            <label
                                onClick={() => setInputLabel2(false)}
                                className={(focused2 === false && formik.values.mobilephone === '' ? 'label ' : 'label animate ')}
                                htmlFor="mobilephone">
                                    +7 926 999 99 99
                            </label>

                    </div>
                </div>
                <div className={"cd4 cm4 " + (width > 800 ? ' pr0' : ' ')}
                    onClick={() => {}}
                >
                    <button
                        disabled={submitDelay && isSchemaValid ? false : true}
                        className={' form-button b-none o-none' + (isSent ? ' sent ' : ' ') + (isSchemaValid === true ? "" : " disabled")}
                        onClick={() => submitBtnHandler()}
                        type='submit'
                    >
                        {!isSent ?                         
                            <a className='py'>
                                Отправить
                            </a> :                        
                            <a className='py'>
                                Заявка отправлена
                            </a>}
                    </button>
                </div>
                <div className={'pt flex flex-row flex-wrap chooseBtn' + (width > 800 ? ' justify-center ' : ' flex-wrap ')}>
                    {currentLand?.length > 0 ? <div className="currentLandBtn landBtn">
                        {<div className="containerCur">
                            <a>
                                Вы выбрали участок №{currentLand[0]?.number}
                            </a>
                        </div>}
                        <div className="pseudoDeleteBtn" onClick={() => setCurrentLand([])}>
                            <a>
                                Удалить
                            </a>
                        </div>
                    </div> : <div className="currentLandBtn landBtn">
                        <div className="pseudoDeleteBtn" onClick={() => scrollTo("map")}>
                            <a>
                                Выбрать участок
                            </a>
                        </div>
                        {<div className="containerCur" onClick={() => scrollTo("map")}>
                            <a>
                                Участок не выбран
                            </a>
                        </div>}
                    </div>}
                    {currentProject?.length > 0 ? <div className="currentLandBtn projectBtn">
                        {<div className="containerCur">
                            <a>
                                Вы выбрали {currentProject[0]?.title}
                            </a>
                        </div>}
                        <div className="pseudoDeleteBtn" onClick={() => setCurrentProject([])}>
                            <a>
                                Удалить
                            </a>
                        </div>
                    </div> : <div className="currentLandBtn projectBtn">
                        <div className="pseudoDeleteBtn" onClick={() => scrollTo("projects")}>
                            <a>
                                Выбрать проект
                            </a>
                        </div>
                        {<div className="containerCur" onClick={() => scrollTo("projects")}>
                            <a>
                                Проект не выбран
                            </a>
                        </div>}
                    </div>}

                </div>
            </form>
        </div>
    );
}

export default FormС