import React from 'react';
import Page1 from './page1';

function Contact() {
    return (
        <div className='m-auto'>
            <div className=' container'>
                <h1 style={{ textAlign: 'center' }}> NOUS SERIONS RAVIS DE DISCUTER AVEC VOUS</h1>
                <p style={{ textAlign: 'center' }} >
                    <b> Chatter avec nous </b> <br />
                    Vous pouvez obtenir une réponse aux questions fréquemment posées en discutant avec notre assistant virtuel, disponible 24 h/24, 7 j/7. Pendant les heures d'ouverture détaillées ci-dessous, il pourra aussi vous rediriger vers un de nos agents si vous avez besoin d'aide supplémentaire.
                </p>


                <p style={{ textAlign: 'center' }} >
                    <b> Appelez-nous  </b> <br />
                    0805 088888 (numéro gratuit)
                </p>

                <p style={{ textAlign: 'center' }} >
                    <b> Téléphone  </b> <br />
                    Lundi - Vendredi: 8h - 21h <br />
                    Samedi: 9h - 20h <br />
                    Dimanche: 9h - 17h <br />
                </p>

                <div style={{ textAlign: 'center' }}>
                <img src="img.jpg" height="" width="" />

            </div>
            </div>
            <Page1 />
        </div>




    )
}

export default Contact
