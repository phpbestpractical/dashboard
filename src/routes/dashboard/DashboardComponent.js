import React,{useState} from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import TodayTrendsComponent from './TodayTrendsComponent';
import UnresolvedTicketsComponent from './UnresolvedTicketsComponent';
import TasksComponent from './TasksComponent';
import Company from 'components/custom/Company';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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
    dashboardPicDiv1 : {
        lineHeight: '1.5em',
    height: '3em',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    marginLeft: '15px',
    },
    dashbardPicdiv2 : {
        marginLeft: '-124px',
        fontSize: '13px',
        marginTop:'10px'
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
    dashboardFirstType : {
        fontSize: '10px',
        height: '3em',
        overflow: 'hidden',
        lineHeight: '1.5em',
        marginLeft: '150px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    dashboardSecondType : {
        fontSize: '10px',
        marginLeft: '-58px',
        marginTop: '10px'
    },
    dashbardThirdType:{
        fontSize: '10px',
        marginLeft: '-84px',
        marginTop: '26px'
    },
    rowBox : {
        display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '20px',
    background: '#def6ff',
    padding: '0 10px',
    border: '1px solid #DFE0EB',
    marginTop: '33px',
    width: '100%',
    height:'56px'
    },
    addWidth:{
        width:'90% !important',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridGap: '20px',
        background: '#def6ff',
        padding: '0 10px',
        border: '1px solid #DFE0EB',
        marginTop: '33px',
        height:'56px'
    },
    calnder:{
        width:'90% !important'
    },
    columns : {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%'
      },column :{
        flex: '33.33%'
      },
      table :{
        border: '2px solid forestgreen',
        width: '90%',
        height: '78%'
      },
        
      th :{
        borderBottom: '1px solid black'
      },
        
      td :{
        textAlign: 'center'
      }
});

function DashboardComponent() {
    const [value, onChange] = useState(new Date());
    const classes = useStyles();
    return (
        <Column>
        

        <Column>
        <Row style={{height:'5px'}}>
        <img height='30px' src={require('./../../assets/icons/dashboardname.png')}/>
        {/* <span className={classes.title}>Ariel Air Collins </span>  */}
        </Row>
        <Row  horizontal='left' vertical='center' 
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
        <Row className={classes.rowBox}>
        {/* <img style={{marginTop:'12px'}} height='25px' width='27px' src={require('./../../assets/icons/iconstat.png')} />
            <span style={{marginTop:'12px'}}></span>mmm */}
        </Row>
        <Row>
        <Company />
        </Row>
        
        </Column>

        <div className={classes.columns}>
   <div className={classes.column}>
       <div className={classes.addWidth}>
       <img style={{marginTop:'12px'}} height='25px' width='27px' src={require('./../../assets/icons/iconstat.png')} />
            <span style={{marginTop:'12px'}}>Calender</span>
       </div>
    <Calendar onChange={onChange} value={value} className={classes.calnder}/>
   </div>
   <div className={classes.column}>
   <div className={classes.addWidth}>
       <img style={{marginTop:'12px'}} height='25px' width='27px' src={require('./../../assets/icons/iconstat.png')} />
            <span style={{marginTop:'12px'}}>Announcements</span>
       </div>
       <table className={classes.table}>
   <tr>
    <th className={classes.th}>*</th>
    <th className={classes.th}>***</th>
    <th className={classes.th}>*</th>
  </tr> 
  <tr>
    <td className={classes.td}>Product Releases</td>
    <td className={classes.td}>Star Of The Month</td>
    <td className={classes.td}>Client Vists This Week</td>
  </tr>
  <tr>
  <td className={classes.td}>Alfreds Futterkiste</td>
    <td className={classes.td}>Maria Anders</td>
    <td className={classes.td}>Germany</td>
  </tr>
</table>
  </div>
  <div className={classes.column}>
  <div className={classes.addWidth}>
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
                <div style={{width:'50%',float:'right',background:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
      
    </div>
            </Row>
            <Row
                horizontal='space-between'
                className={classes.lastRow}
                breakpoints={{ 1024: 'column' }}
            >  <UnresolvedTicketsComponent containerStyles={classes.unresolvedTickets} />
              

            </Row>
        </Column>

    );
}

export default DashboardComponent;
