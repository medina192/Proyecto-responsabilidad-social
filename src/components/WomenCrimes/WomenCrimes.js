import React from 'react';
import { NavLink } from 'react-router-dom';

const WomenCrimes = () => {
    return (
        <div className="body-crime animate__animated animate__fadeIn">
            <div className="crime-body-notebook">
                <div id="notebook-paper">
                    <header>
                        <h1>Toma Nota!</h1>
                    </header>
                    <div id="content">
                        <div className="hipsum">
                            <p className="crime-title">¿Cómo denunciar la violencia de género?</p>
                            <p>
                                El primer paso es saber que no estás sola. De acuerdo con la Ley de 
                                Bolsillo contra las Violencias hacia las Mujeres, elaborada por la
                                feminista, defensora de derechos humanos y consultora independiente
                                Yndira Sandoval Sánchez, es importante distinguir la dependencia 
                                gubernamental indicada para atender tu denuncia, así como los 
                                recursos personales, emocionales, jurídicos, materiales y 
                                económicos con los que cuentas y los que el Estado debe brindarte
                                por derecho.
                            </p>
                            <p>
                                También, conocer organizaciones que brindan asesoría y 
                                protección de los derechos de las mujeres, así como tu red 
                                cercana de apoyo, es decir, tener muy presentes teléfonos y 
                                direcciones de amistades y familiares con quienes puedes acudir
                                 ante una emergencia.
                            </p>
                            <p>
                                Si sufres una agresión y te encuentras en peligro, puedes 
                                llamar al 911 para que una unidad de policía se presente en el
                                 lugar y puedas ponerte a salvo, o a la Línea Mujeres, al 
                                 teléfono 56581111, opción 4, en la que una abogada y una 
                                 psicóloga te orientarán para saber cómo actuar en caso de 
                                 emergencia. Esta línea está abierta las 24 horas los 365 días
                                  del año.
                            </p>
                            <p>
                                También puedes acudir directamente a una agencia del Ministerio
                                Público o a la Fiscalía Especializada, se recomienda que sea 
                                una en la misma zona y/o alcaldía donde se cometió el delito, 
                                para dar agilidad a la denuncia. Procura asistir acompañada de
                                una persona de tu confianza, llevar una identificación oficial y testigos, si los hubiera.
                            </p>
                            <p>
                                Recuerda que si una persona te agredió y dejó rastros en tu 
                                cuerpo, lo mejor es asistir a denunciar sin asearte ni cambiar 
                                tu ropa, tampoco vayas al médico ni maquilles las heridas.
                            </p>
                            <p>
                                De acuerdo con la Ley de Bolsillo contra las Violencias hacia 
                                las Mujeres, estos son algunos de los derechos con los que 
                                cuentas al momento de presentar una denuncia:
                            </p>
                            <p><span>1.</span> Recibir asesoría jurídica.</p>
                            <p><span>2.</span> Ratificar la denuncia con documentación oficial y ofrecer los testigos de identidad.</p>
                            <p><span>3.</span> Contar con las facilidades para reconocer, identificar o controlar al probable responsable, sin ser vista por él.</p>
                            <p><span>4.</span> Ser atendida en un espacio privado, donde puedes estar acompañada de una persona de tu confianza.</p>
                            <p><span>5.</span> Ser atendida con calidez, de manera seria y respetuosa.</p>
                            <p><span>6.</span> Comparecer ante el Ministerio Público para acreditar el delito, la responsabilidad del inculpado y el monto del daño.</p>
                            <p><span>7.</span> Recibir atención médica o psicológica gratuita.</p>
                            <p><span>8.</span> Denunciar cualquier maltrato por parte de las autoridades.</p>
                       </div>
                    </div>
                </div>
            </div>
            <div className="crime-container-cards">
                <div className="crime-centere-cards">
                    <div className="crime-card">
                        <div className="crime-card-image1"></div>
                        <div className="crime-card-text">
                            <h4>A) Lesiones</h4>
                            <p>
                                Sanciona a la persona que provoca cualquier daño o alteración 
                                en la salud de otra persona, mediante heridas, golpes, 
                                fracturas, contusiones, escoriaciones, quemaduras y otras 
                                formas de daño que dejen huella material en el cuerpo humano 
                                (CPDF, 2018, art. 130).
                            </p>
                        </div>
                    </div>
                    <div className="crime-card">
                        <div className="crime-card-image2"></div>
                        <div className="crime-card-text">
                            <h4>b) Acoso sexual</h4>
                            <p>
                                Sanciona a quien pida (para sí o para otro) o realice en otra 
                                persona una conducta sexual no deseada por la víctima, y que 
                                como consecuencia de esa conducta cause un daño o sufrimiento 
                                psicoemocional que lastime su dignidad (CPDF, 2018, art.179).
                            </p>
                        </div>
                    </div>
                    <div className="crime-card">
                        <div className="crime-card-image3"></div>
                        <div className="crime-card-text">
                            <h4>c) Violación</h4>
                            <p>
                                Sanciona a quien por medio de la violencia física o moral 
                                (agresiones psicológicas o amenazas) realice cópula con una
                                 persona (hombre o mujer). Se entiende por cópula la introducción 
                                 del pene en el cuerpo humano por vía vaginal, anal o bucal.
                                  Igualmente se sanciona a quien introduzca un objeto, instrumento,
                                 elemento o cualquier parte del cuerpo humano distinto al pene 
                                 manos, dedos, etcétera), haciendo uso de la violencia física o
                                moral. Si entre el agresor y la víctima existe un vínculo
                                matrimonial, de concubinato o de pareja, será indispensable que
                                la víctima presente su denuncia para que los hechos sean 
                                investigados (ver abajo el apartado de delitos de querella) 
                                (CPDF, 2018, art. 174).
                            </p>
                        </div>
                    </div>
                    <div className="crime-card">
                        <div className="crime-card-image4"></div>
                        <div className="crime-card-text">
                            <h4>d) Violación equiparada</h4>
                            <p>
                                Se sanciona igual que la violación a quien tenga una relación
                                 sexual o introduzca cualquier objeto, instrumento, elemento
                                o cualquier parte del cuerpo humano (manos, dedos, etcétera),
                                por vía anal o vaginal, en una persona que debido a su edad
                                o su estado mental no tenga la capacidad de comprender el
                                hecho o, por cualquier razón, no pueda resistirlo. 
                                (CPDF, 2018, art. 175).
                            </p>
                        </div>
                    </div>
                    <div className="crime-card">
                        <div className="crime-card-image5"></div>
                        <div className="crime-card-text">
                            <h4>e) Abuso sexual</h4>
                            <p>
                                Sanciona a quien sin consentimiento de una persona y sin 
                                el propósito de llegar a la cópula, ejecute en ella un acto
                                sexual, la obligue a observarlo o la haga ejecutarlo. Para 
                                los efectos de este artículo, se entiende por acto sexual 
                                cualquier acción con sentido lascivo y de contenido sexual
                                que se cometa intencionalmente. El acto sexual comprende 
                                tocamientos o manoseos corporales obscenos que representen
                                actos explícitamente sexuales u obliguen a la víctima a 
                                representarlos. (CPDF, 2018, art. 176).
                            </p>
                        </div>
                    </div>
                    <div className="crime-card">
                        <div className="crime-card-image6"></div>
                        <div className="crime-card-text">
                            <h4>f) Abuso sexual equiparado</h4>
                            <p>
                                Sanciona a quien sin intención de llegar a la cópula ejecute
                                un acto sexual en una persona que no tenga capacidad de 
                                comprender el significado del hecho, aun con su consentimiento o
                                por cualquier causa no pueda resistirlo, y le obligue a 
                                observar o ejecutar dicho acto (CPDF, 2018, art. 177).
                            </p>
                        </div>
                    </div>
                    <div className="crime-card">
                        <div className="crime-card-image7"></div>
                        <div className="crime-card-text">
                            <h4>g) Violencia familiar</h4>
                            <p>
                                Sanciona a quien cometa cualquier tipo de violencia física,
                                 psicoemocional, sexual, económica, patrimonial o contra los
                                derechos reproductivos, dentro o fuera del domicilio 
                                familiar, en contra de (CPDF, 2018, art. 200):
                            </p>
                            <p>I. El o la cónyuge, el o la ex-cónyuge, la concubina, ex-concubina, el concubinario o el ex concubinario;</p>
                            <p>II. Familiares ascendentes o descendentes (padres, hijos, nietos) o colaterales hasta el cuarto grado (hermanos, sobrinos y sobrino nietos);</p>
                            <p>III. El adoptante o adoptado;</p>
                            <p>IV. El incapaz sobre el que se es tutor o curador; y</p>
                            <p>V. La persona con la que se haya constituido sociedad en convivencia.</p>
                        </div>
                    </div>
                    <div className="crime-card">
                        <div className="crime-card-image8"></div>
                        <div className="crime-card-text">
                            <h4>h) Feminicidio</h4>
                            <p>
                                El delito de feminicidio lo comete quien, por razones de 
                                género, priva de la vida a una mujer. Existen razones de género
                                 cuando la víctima (CPDF, 2018, art. 148 bis):
                            </p>
                            <p>I. Muestre signos de violencia sexual de cualquier tipo;</p>
                            <p>II. Muestre lesiones infamantes, degradantes o mutilaciones, antes o después a la privación de la vida;</p>
                            <p>III. Haya sido amenazada, acosada, lesionada o violentada por su agresor;</p>
                            <p>IV. Su cuerpo sea expuesto, depositado o arrojado en un lugar público;</p>
                            <p>V. Haya sido incomunicada antes de su fallecimiento; o</p>
                            <p>VI. Haya existido entre el sujeto activo y la víctima una relación sentimental (matrimonio, concubinato, noviazgo, sociedad de convivencia), afectiva o de confianza, de parentesco por consanguinidad o afinidad, laboral, docente o cualquiera que implique subordinación o superioridad.</p>
                            <p>VII. Se haya encontrado en estado de indefensión.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container-return-button crime-container-button">
                        <NavLink to="/">
                            <button className="pointer">Regresar</button>
                        </NavLink>
            </div>
        </div>
    )
}

export default WomenCrimes
