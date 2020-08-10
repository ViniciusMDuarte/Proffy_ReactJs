import React from 'react';
import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import Input from '../../components/Input';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os proffys disponíveis.">
            <form id="search-teachers-list">
                <Input name="subject" label="Matéria" />
                <Input name="week_day" label="Dia da semana" />
                <Input type="time" name="time" label="Hora" />
            </form>
           </PageHeader>

           <main>
               <article className="teacher-item">
                   <header>
                       <img src="https://avatars0.githubusercontent.com/u/42785005?s=460&u=d4c1baff061120736cc077c443130e0eacacb0dc&v=4" alt="Vinicius Duarte"/>
                        <div>
                            <strong>Vinicius Duarte</strong>
                            <span>Front end</span>
                        </div> 
                    </header>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <br/> <br/>
                            Deserunt recusandae, non, voluptas, ab perspiciatis itaque corporis amet quis ipsam dolore dolores hic enim accusamus error incidunt veniam? Saepe, eligendi impedit.
                        </p>
                        <footer>
                            <p>
                                Preço/hora
                                <strong>R$ 300,00</strong>   
                            </p>
                        
                            <button type="button">
                                <img src={whatsappIcon} alt="Whatsapp"/>
                                Entrar em contato
                            </button>
                        </footer>
                </article>
            </main>

        </div>

    )
}

export default TeacherList;