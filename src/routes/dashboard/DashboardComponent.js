import React, { useState } from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import TodayTrendsComponent from './TodayTrendsComponent';
import UnresolvedTicketsComponent from './UnresolvedTicketsComponent';
import TasksComponent from './TasksComponent';
import Company from 'components/custom/Company';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import SlideShow from './SlideShow';



//const [openSecond, setOpenSecond] = useState({ flag: false, name: '', birthday: '' });

const initialValues = {                   // type all the fields you need
    flag: false,
    name: '',
    birthday: ''
};

// const [allValues, setAllValues] = useState({
//     flag: '',
//     name: '',
//     birthday: ''
//  });


const useStyles = createUseStyles({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    container: {
        marginLeft: 32,
        marginRight: 32
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    dashboardPicDiv1: {
        lineHeight: '1.5em',
        height: '3em',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        marginLeft: '15px',
    },
    dashbardPicdiv2: {
        marginLeft: '-124px',
        fontSize: '13px',
        marginTop: '10px'
    },
    todayTrends: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30
        }
    },
    dashboardFirstType: {
        fontSize: '10px',
        height: '3em',
        overflow: 'hidden',
        lineHeight: '1.5em',
        marginLeft: '150px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    dashboardSecondType: {
        fontSize: '10px',
        marginLeft: '-58px',
        marginTop: '10px'
    },
    dashbardThirdType: {
        fontSize: '10px',
        marginLeft: '-84px',
        marginTop: '26px'
    },
    rowBox: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '20px',
        background: '#def6ff',
        padding: '0 10px',
        border: '1px solid #DFE0EB',
        marginTop: '23px',
        width: '100%',
        height: '90px',
        marginBottom: '12px'
    },
    addWidth: {
        width: '90%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridGap: '20px',
        background: '#def6ff',
        padding: '0 10px',
        border: '1px solid #DFE0EB',
        marginTop: '33px',
        height: '56px'
    },
    annocementWidth: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridGap: '20px',
        background: '#def6ff',
        padding: '0 10px',
        border: '1px solid #DFE0EB',
        marginTop: '33px',
        height: '56px'
    },
    calnder: {
        width: '90% !important'
    },
    columns: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%'
    }, column: {
        flex: '33.33%'
    },
    table: {
        border: '2px solid #a0a096',
        width: '90%',
        height: '78%',
        background: 'white'
    },

    th: {
        borderBottom: '1px solid black',
        textAlign: 'center'
    },
    //   tr:{
    //     nth-Children(even) : {
    //         backgroundColor: Lightgreen;
    //     }
    //   },

    td: {
        textAlign: 'center'
    },
    link: {
        flexGrow: '1',
        width: '33%',
        height: '100px',
        cursor: 'pointer'
    },
    birthName: {
        borderRadius: '23px',
        background: '#51d8f7',
        padding: '20px',
        marginRight: '20px'
    }
});



function DashboardComponent() {

    const [values, setValues] = useState(initialValues);

    const setOpenSecond = (flag, name, bdate) => {
        setValues({
            ...values,                                // spreading the unchanged values
            flag: flag,
            name: name,
            birthday: bdate        // changing the state of *changed value*
        });
    };

    const [value, onChange] = useState(new Date());
    // const [openFirst, setOpenFirst] = useState(false);
    //const [openSecond, setOpenSecond] = useState(false);
    const classes = useStyles();

    const [openFirst, setOpenFirst] = useState(false);


    return (



        <Column>


            <Column>
                <Row style={{ height: '5px' }}>
                    <img height='30px' src={require('./../../assets/icons/dashboardname.png')} />
                    {/* <span className={classes.title}>Ariel Air Collins </span>  */}
                </Row>
                <Row horizontal='left' vertical='center'
                    className={classes.lastRow}
                    breakpoints={{ 1024: 'column' }}>
                    {/* <IconLogo /> */}
                    <img height='50px' src={require('./../../assets/icons/icons8-circled-user-female-skin-type-1-and-2-16.png')} />
                    {/* <div className={classes.dashboardPicDiv1}>Gracie Collins </div>  */}
                    <div className={classes.dashbardPicdiv2}>Senior</div>
                    <Row>
                        <div className={classes.dashboardFirstType}>Code <b>TL</b></div>
                        {/* <div className={classes.dashboardSecondType}>Birthday <b>8 June</b> </div>
            <div className={classes.dashbardThirdType}>Gender <b>Female</b></div> */}
                    </Row>
                    <Row>
                        <div className={classes.dashboardFirstType}>Designation <b>Tech Lead</b></div>
                        {/* <div className={classes.dashboardSecondType}>Born <b>16 Aug 1982</b> </div>
            <div className={classes.dashbardThirdType}>Gender <b>Female</b></div> */}
                    </Row>
                    <Row>
                        <div className={classes.dashboardFirstType}>Practise <b>Development</b></div>
                        {/* <div className={classes.dashboardSecondType}>Born <b>16 Aug 1982</b> </div>
            <div className={classes.dashbardThirdType}>Gender <b>Female</b></div> */}
                    </Row>
                </Row>

            </Column>
            <Column>
                {/* <Row className={classes.rowBox}>
                    <div className={classes.link}>
                        abc
                    </div>
                    <div className={classes.link}>
                        abc
                    </div>
                    <div className={classes.link}>
                        <a onClick={() => setOpenFirst(true)}>Birthday</a>
                    </div>

                    {/* <img style={{marginTop:'12px'}} height='25px' width='27px' src={require('./../../assets/icons/iconstat.png')} />
            <span style={{marginTop:'12px'}}></span>
                </Row> */}

                <div className={classes.rowBox}>
                    <Column>
                        <span className='rowColor'>Announcements</span>
                        <Row horizontal='left' vertical='center'
                            breakpoints={{ 1024: 'column' }}
                            className="row">

                        </Row>
                    </Column>
                    <Column>
                        <span className='rowColor' >Achievements</span>
                        <Row horizontal='left' vertical='center'
                            breakpoints={{ 1024: 'column' }}
                            className="row">
                        </Row>
                    </Column>
                    <Column>
                        <span className='rowColor' > Birthdays</span>
                        <Row style={{ padding: '0px 10px 10px 10px' }} horizontal='left' vertical='center'
                            breakpoints={{ 1024: 'column' }}
                            className="row">
                            <marquee>
                                <span onClick={() => setOpenSecond(true, 'suma', '11/05/2011')} className={classes.birthName}>suma</span>
                                <span onClick={() => setOpenSecond(true, 'ankit', '05/01/1990')} className={classes.birthName}>ankit</span>
                                <span onClick={() => setOpenSecond(true, 'james', '08/05/1995')} className={classes.birthName}>james</span>
                                <span onClick={() => setOpenSecond(true, 'figo', '30/11/1985')} className={classes.birthName}>figo</span>
                                <span onClick={() => setOpenSecond(true, 'arvind', '03/01/1967')} className={classes.birthName}>arvind</span>
                                <span onClick={() => setOpenSecond(true, 'devi', '07/07/2007')} className={classes.birthName}>devi</span>

                            </marquee>
                        </Row>
                    </Column>

                </div>

                <Row>
                    <Company />
                </Row>

            </Column>

            <div className={classes.columns}>
                <div className={classes.column}>
                    <div className={classes.addWidth}>
                        <img style={{ marginTop: '12px' }} height='25px' width='27px' src={require('./../../assets/icons/iconstat.png')} />
                        <span style={{ marginTop: '12px' }}>Calender</span>
                    </div>
                    <Calendar onChange={onChange} value={value} className={classes.calnder} />
                </div>
                <div className={classes.column}>
                    <div style={{width: '100% !important'}} className={classes.annocementWidth}>
                        <img style={{ marginTop: '12px' }} height='25px' width='27px' src={require('./../../assets/icons/iconstat.png')} />
                        <span style={{ marginTop: '12px' }}>Announcements</span>
                    </div>
                    {/* <table className={classes.table}>
                        <thead>
                            <tr>
                                <th className={classes.th}>*</th>
                                <th className={classes.th}>***</th>
                                <th className={classes.th}>*</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={classes.td}>Product Releases</td>
                                <td className={classes.td}>Star Of The Month</td>
                                <td className={classes.td}>Client Vists This Week</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className={classes.td}>Annuanl</td>
                                <td className={classes.td}>2020 Annual Review</td>
                                <td className={classes.td}>30/11/2022</td>
                            </tr>
                        </tfoot>
                    </table> */}

                    {/* <div className="slide-container"> */}
                    {/* <Fade>
                        {slideImages.map((fadeImage, index) => (
                            <div className="each-fade" key={index}>
                                <div className="image-container">
                                    <img src={fadeImage.url} alt={fadeImage.caption}/>
                                </div>
                                <h2>{fadeImage.caption}</h2>
                            </div>
                        ))}
                    </Fade> */}
                    {/* </div> */}
                    <SlideShow />
                </div>


                <div className={classes.column}>
                    <div className={classes.addWidth}>
                        <img style={{ marginTop: '12px' }} height='25px' width='27px' src={require('./../../assets/icons/iconstat.png')} />
                        <span style={{ marginTop: '12px' }}>Recent Training</span>
                    </div>
                    <table className={classes.table}>
                        <thead>
                            <tr>
                                <th className={classes.th}>Type</th>
                                <th className={classes.th}>Description</th>
                                <th className={classes.th}>Review Date</th>
                                <th className={classes.th}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={classes.td}>Annuanl</td>
                                <td className={classes.td}>2020 Annual Review</td>
                                <td className={classes.td}>30/11/2022</td>
                            </tr>
                            <tr>
                                <td className={classes.td}>Annuanl</td>
                                <td className={classes.td}>2020 Annual Review</td>
                                <td className={classes.td}>30/11/2022</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className={classes.td}>Annuanl</td>
                                <td className={classes.td}>2020 Annual Review</td>
                                <td className={classes.td}>30/11/2022</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <div className={classes.column}>
                    {/* <div className={classes.addWidth}>
       <img style={{marginTop:'12px'}} height='25px' width='27px' src={require('./../../assets/icons/iconstat.png')} />
            <span style={{marginTop:'12px'}}>Shortcuts</span>
       </div>
     {/* <Calendar onChange={onChange} value={value} className={classes.calnder}/> */}
                </div>
            </div>





            <Row
                horizontal='space-between'
                className={classes.lastRow}
                breakpoints={{ 1024: 'column' }}
            >
                <TasksComponent containerStyles={classes.tasks} />
                <div style={{ width: '50%', float: 'right', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                </div>
            </Row>
            <Row
                horizontal='space-between'
                className={classes.lastRow}
                breakpoints={{ 1024: 'column' }}
            >  <UnresolvedTicketsComponent containerStyles={classes.unresolvedTickets} />


            </Row>

            <Modal open={openFirst} onClose={() => setOpenFirst(false)} center>
                <p>Birthay Details</p>
                <div style={{ overflowX: 'scroll', height: '46px' }}>
                    <p>
                        <span onClick={() => setOpenSecond(true, 'suma', '11/05/2011')} className={classes.birthName}>suma</span>
                        <span onClick={() => setOpenSecond(true, 'ankit', '05/01/1990')} className={classes.birthName}>ankit</span>
                        <span onClick={() => setOpenSecond(true, 'james', '08/05/1995')} className={classes.birthName}>james</span>
                        <span onClick={() => setOpenSecond(true, 'figo', '30/11/1985')} className={classes.birthName}>figo</span>
                        <span onClick={() => setOpenSecond(true, 'arvind', '03/01/1967')} className={classes.birthName}>arvind</span>
                        <span onClick={() => setOpenSecond(true, 'devi', '07/07/2007')} className={classes.birthName}>devi</span>
                    </p></div>

            </Modal>
            <Modal open={values.flag} onClose={() => setOpenSecond(false, '', '')} center>
                <p>Birthay Photo</p>
                <img style={{ float: 'left', textAlign: 'left', width: '50%' }} src={require('./../../assets/images/popup-birthday.png')} />
                <Column>
                    <Row>
                        <p>Birthday Information</p>
                    </Row>
                    <Row>
                        Name : {values.name}
                    </Row>
                    <Row>
                        Birth Date : {values.birthday}
                    </Row>
                </Column>
            </Modal>
        </Column>

    );
}

export default DashboardComponent;
