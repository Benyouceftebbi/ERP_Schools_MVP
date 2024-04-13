'use client'
import styles from "./rightbar.module.css";

import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { User2 } from "lucide-react";
import { fetchFirestoreData } from "@/app/Home/calendar/fetchData";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';
import AutosuggestComponent from "../Autocomplete";
import { generateAvailableStartTimes,timestampToHourString } from "@/app/Home/matches/page";
import { MatchDetails } from "@/app/Home/matches/page";
import { useAuth } from "@/context/AuthContext";
const priceMap = {
    60: 200, // Price for 60 minutes
    90: 300, // Price for 90 minutes
    120: 500, // Price for 120 minutes
    // Add more duration-price mappings as needed
  };
const Rightbar = () => {
    const [events, setEvents] = useState([]);

    const [render,setRender]=useState(false)
 


    const [noteList, setNoteList] = useState([
      {
          id: 1,
          content: "الاتصال بأكاديمية هاب تنس لفرص الشراكة.",
          category: "شراكة",
          date: "2024-04-03"
      },
      {
          id: 2,
          content: "البحث عن أفضل أكاديميات التنس في أوروبا لتقنيات التدريب.",
          category: "بحث",
          date: "2024-04-03"
      },
      {
          id: 3,
          content: "حضور ورشة عمل حول علم النفس الرياضي للاعبي التنس.",
          category: "تدريب",
          date: "2024-04-03"
      },
      {
          id: 4,
          content: "تحديث الموقع الإلكتروني ببرامج تدريب جديدة للأطفال.",
          category: "موقع الويب",
          date: "2024-04-03"
      },
      {
          id: 5,
          content: "جدولة اجتماع مع اللاعبين لمناقشة استراتيجية البطولة.",
          category: "استراتيجية",
          date: "2024-04-03"
      }
  ]);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const { classes, allEvents} = await fetchFirestoreData();
  ;
                setEvents(allEvents);
            } catch (error) {
                console.error('Error fetching Firestore data:', error);
            }
        };
  
        fetchData();
    }, []);
    const [reservation,setReservation]=useState({players:[],reaccurance:0,date:new Date(),courtName:'',duration:60,startTime:new Date().toISOString(),payment:'cash',team1:[],team2:[],name:'name',description:'',coachname:'coach',reaccuring:false,discount:'0'})

      const [modalIsOpen, setModalIsOpen] = useState(false);
    
      const {courts,trainers,trainees}=useAuth() 
      return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.text}>
                    <span className={styles.notification}>أحداث اليوم</span>
                    <FullCalendar
    plugins={[timeGridPlugin, interactionPlugin, listPlugin]}
    initialView="timeGridDay" // عرض يوم واحد
    headerToolbar={{
        start: '',
        center: 'title',
        end: ''
    }}
    events={events}
    slotMinTime="09:00:00"
    slotMaxTime="22:00:00"
    slotDuration="00:30:00"
    headerToolbarCenterTitleStyle={{ fontSize: '16px' }}
    selectable={true} // السماح باختيار فترات زمنية
    select={(info) => {
        // عند تحديد فترة زمنية، قم بتعيين الوقت البدء في الحجز وفتح النافذة المنبثقة
        setReservation((prevReservation) => ({
            ...prevReservation,
            startTime: new Date(info.start),
            date: new Date(info.start)
        }));
        setModalIsOpen(true);
    }}
    direction="rtl"
    locale="ar-dz" // تحديد اتجاه العرض من اليمين إلى اليسار
/>
                    {modalIsOpen && (
                        <MatchDetails setI={setRender} i={render} courts={courts} setShowModal={setModalIsOpen} setReservation={setReservation} reservationDetails={reservation} trainees={trainees} trainers={trainers} />
                    )}
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    {/* <Image className={styles.bg} src="/astronaut.png" alt="" fill /> */}
                </div>
                <div className={styles.text}>
                    <span className={styles.notification}>ملاحظات</span>
                    <div>
                        <ul style={{ listStyleType: 'none', padding: '0' }}>
                            {noteList.map((note, index) => (
                                <li key={index} style={{ marginBottom: '5px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>{note.content}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
    
};

export default Rightbar;