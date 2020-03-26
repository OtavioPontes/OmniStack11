import React, {useState} from 'react';
import './styles.css';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();
        
        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents',data, {
                headers: {
                    authorization: ongId,
                }
            })
            alert("Caso cadastrado com sucesso!");
            history.push('/profile');

        } catch (error) {
            alert("Erro ao cadastrar caso, tente novamente.");
        }

    }
   
    return(

        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Cadastro novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso</p>
                    <Link to="/" className="back-link">
                        <FiArrowLeft size="16" color="#E02041" />
                        Voltar para home
                    </Link>

                </section>
        

                <form onSubmit={handleNewIncident}>
                    <input type="text" 
                    placeholder="Título do Caso"
                    value = {title}
                    onChange = {e => setTitle(e.target.value)}
                    />

                    <textarea 
                    placeholder='Descrição'
                    value = {description}
                    onChange = {e => setDescription(e.target.value)}
                    ></textarea>
                    <input 
                    placeholder="Valor em reais"
                    value = {value}
                    onChange = {e => setValue(e.target.value)}
                    />
                    
                
                    <button className="button" type="submit">Enviar</button>

                </form>


            </div>

        </div>


    );


}