import './appHeaderForm.scss'
import img from '../../img/bg.jpg'
import { useForm } from 'react-hook-form';
import { useHttp } from '../../hooks/http.hook.js';

import Spinner from '../spinner/Spinner.js';

const AppHeaderForm = () => {
    return (
        <>
            <div className="img">
                <img src={img} alt="backgroundPhoto" />
                <div className="give-your-number">
                    <b>Գրեք Ձեր հեռախոսահամարը և մեր մասնագետը կկապնվի Ձեզ հետ:</b>
                    <Form />
                </div>
            </div>
            <div className="kapmed">
                <b>Գրեք Ձեր հեռախոսահամարը և մեր մասնագետը կկապնվի Ձեզ հետ:</b>
                <Form />
            </div>
        </>
    )
}

const Form = () => {
    const { register,
        formState: {
            errors,
        },
        handleSubmit,
        reset } = useForm({ mode: 'onBlur' });

    const { request, process, clearError } = useHttp();

    const onSubmit = (data) => {
        request("http://localhost:3000/requests", "POST", JSON.stringify(data))
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
                return <p style={{ color: '#ff3333' }} className='form__msg'>Ինչ-որ սխալ է տեղի ունեցել</p>
            case 'idle':
                return <p style={{ color: '#198754' }} className='form__msg'>Մենք շուտով կկապնվենք ձեզ հետ</p>
            default: return;
        }
    }

    return (
        <form action="" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <input type="tel" name="" id="" placeholder="Հեռախոսահամար"
                {...register('tel',
                    {
                        required: 'Դաշտը պարտադիր է',
                        minLength: {
                            value: 9,
                            message: 'Ամենաքիչը 9 նիշ'
                        },
                        // pattern:{
                        //     value: /^(0|[1-9]\d*)(\.\d+)?$/,
                        //     message: 'Միայն թվեր'
                        // },
                    }
                )} />
            {errors.tel && <p style={{ marginBottom: 3, color: '#ff3333' }} className='form__msg'>{errors.tel.message}</p>}
            {setContent(process)}
            <input type="submit" value="Պատվիրել զանգ" />
        </form>
    )
}

export default AppHeaderForm;