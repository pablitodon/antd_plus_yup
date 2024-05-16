import React, { useState } from 'react';
import styles from './registerForm.css'
import { useForm, Controller } from "react-hook-form";
import Title from './../Title/Title';
import Modal from '../Modal/Modal';
import * as yup from "yup";
import 'antd/dist/antd.js';
import { Input, Button } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';





const schema = yup.object().shape({
    name: yup.string().required('Обязательное поле'),
    email: yup.string().required('Поле обязательно для заполнения').email('Введите корректный email'),
    password: yup.string().required('Пароль обязателен').min(6, 'Минимум 6 символов'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Пароли должны совпадать.')
        .required('Подтверждение обязательно.'),
    gender: yup.string().required('Обязательное поле'),
    phone:yup.string().required('Телефон необходимо указать.')
});


const RegistrationForm = () => {
    const { handleSubmit, control, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });



    const [registerData, setRegisterData] = useState(null);
    const [modalActive, setActive] = useState(false)


    const onSubmit = (data) => {
        setRegisterData(data);
        setActive(true)
    }


    return (
        <div className='wrapp'>
            <Title modalActive={modalActive} />
            {/* form */}
            <div className='formWrap'>
                {modalActive
                    ? <Modal registerData={registerData} />
                    : <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className='label'> Введите имя:</label>
                            <div className='containerForm'>
                                <Controller
                                    name="name"
                                    control={control}
                                    render={({ field }) => <Input {...field} placeholder="Name" className='input' />}
                                />
                                <p className='errorMessage'>{errors.name?.message}</p>
                            </div>
                        </div>

                        <div>
                            <label className='label'> Введите Email:</label>
                            <div className='containerForm'>
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({ field }) => <Input {...field} placeholder="Email" className='input' />}
                                />
                                <p className='errorMessage'>{errors.email?.message}</p>
                            </div>
                        </div>



                        <div>
                            <label className='label'> Введите пароль:</label>
                            <div className='containerForm'>
                                <Controller
                                    name="password"
                                    control={control}
                                    render={({ field }) => <Input {...field} placeholder="Password" className='input' />}
                                />
                            </div>
                            <p className='errorMessage'>{errors.password?.message}</p>
                        </div>


                        <div>
                            <label className='label'> Подтвердите пароль:</label>
                            <div className='containerForm'>
                                <Controller
                                    name="confirmPassword"
                                    control={control}
                                    render={({ field }) => <Input {...field} placeholder="СonfirmPassword" className='input' />}
                                />
                            </div>
                            <p className='errorMessage'>{errors.confirmPassword?.message}</p>
                        </div>

                        <div>
                            <label className='label'> Укажите пол:</label>
                            <div className='containerForm'>
                                <Controller
                                    name="gender"
                                    control={control}
                                    render={({ field }) => <Input {...field} placeholder="Gender" className='input' />}
                                />
                            </div>
                            <p className='errorMessage'>{errors.gender?.message}</p>
                        </div>

                        <div>
                            <label className='label'>Введите телефон:</label>
                            <div className='containerForm'>
                                <Controller
                                    name="phone"
                                    control={control}
                                    render={({ field }) => <Input {...field} placeholder="Phone" className='input' />}
                                />
                            </div>
                            <p className='errorMessage'>{errors.phone?.message}</p>
                        </div>
                        <div/>
                        <Button 
                        type='primary'
                        htmlType='submit'
                        className='buttonSubmitForm'
                         >
                            Зарегистрироваться.
                         </Button>
                    </form>}
            </div>
        </div>
    );
};

export default RegistrationForm;