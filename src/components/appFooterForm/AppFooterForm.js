import './appFooterForm.scss';
import Spinner from '../spinner/Spinner';
import { useForm } from 'react-hook-form';
import { useHttp } from '../../hooks/http.hook.js';

const AppFooterForm = () => {
    const { register,
        formState: {
            errors,
        },
        handleSubmit,
        reset } = useForm({ mode: 'onBlur' });

    const { request, process, clearError } = useHttp();

    const onSubmit = (data) => {
        request("http://localhost:3000/messages", "POST", JSON.stringify(data))
        reset();

        setTimeout(() => {
            clearError()
        }, 5000);
    }

    const setContent = (process) => {
        switch (process) {
            case 'loading':
                return <Spinner />;
            case 'error':
                return <p style={{ color: '#ff3333', fontSize: 20 }}>Ինչ-որ սխալ է տեղի ունեցել</p>
            case 'idle':
                return <p style={{ color: '#198754', fontSize: 20 }}>Մենք շուտով կկապնվենք ձեզ հետ</p>
            default: return;
        }
    }


    return (
        <>
            <div className="registr">
                
                <div className="registr1">
                    <form action="" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                        <p>Անուն,Ազգանուն</p>
                        <input type="text"
                            {...register('name',
                                {
                                    required: 'Դաշտը պարտադիր է',
                                    minLength: {
                                        value: 2,
                                        message: 'Ամենաքիչը 2 նիշ'
                                    },
                                })} />
                        {errors.name && <p style={{ marginTop: -8, color: '#ff3333' }}>{errors.name.message}</p>}
                        <p>Հեռախոսահամար</p>
                        <input type="tel" name="" id=""
                            {...register('tel',
                                {
                                    required: 'Դաշտը պարտադիր է',
                                    minLength: {
                                        value: 9,
                                        message: 'Ամենաքիչը 9 նիշ'
                                    },
                                    // pattern:{
                                    //     // value: /^([0-9]+$/),
                                    //     message: 'Միայն թվեր'
                                    // },
                                }
                            )} />
                        {errors.tel && <p style={{ marginTop: -8, color: '#ff3333' }}>{errors.tel.message}</p>}
                        <p>էլ Հասցե</p>
                        <input type="email" name="" id=""
                            {...register('email',
                                {
                                    required: 'Դաշտը պարտադիր է',
                                    pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        message: 'Սխալ էլեկտրոնային հասցե'
                                    },
                                }
                            )} />
                        {errors.email && <p style={{ marginTop: -8, color: '#ff3333' }}>{errors.email.message}</p>}
                        <p>Հաղորդագրություն</p>
                        <textarea name="" id="" cols="30" rows="10"
                            {...register('mes',
                                {
                                    required: 'Դաշտը պարտադիր է',
                                    minLength: {
                                        value: 10,
                                        message: 'Ամենաքիչը 10 նիշ'
                                    }
                                })} />
                        {errors.mes && <p style={{ marginTop: -8, color: '#ff3333' }}>{errors.mes.message}</p>}
                        {setContent(process)}
                        <input type="submit" value="Հաստատել" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default AppFooterForm;