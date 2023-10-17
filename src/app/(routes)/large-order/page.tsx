"use client";
import Link from "next/link";
import {timeOptions, timeOptType} from "@/app/_datas/time-picker";
import React, {useId, useState } from "react";
import Select from "react-select";
import TimePicker from "react-time-picker";
import { useCart } from "@/app/_hooks/menuContext";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { CartItem } from "@/app/_hooks/types";

type Props = {};

type EventDetailType = {
  buyerName: string;
  email: string;
  phone: string;
  birthDate: Date;
  address: string;
  event: {
    name: string;
    startDateTime: Date;
    startTime: {
      label: string,
      value: string
    }
    note: string;
  };
};


const eventDetailInit : EventDetailType = {
  buyerName: '',
  email: '',
  phone: '',
  birthDate: new Date(),
  address: '',
  event: {
    name: '',
    startDateTime: new Date(),
    startTime: timeOptions[7],
    note: ''
  }
}

type BulkItem = {
  id: string,
  qyt: number
}

const Page = (props: Props) => {
  const [eventDetail, seteventDetail] = useState<EventDetailType>(eventDetailInit)
  const [orderBulk, setOrderBulk] = useState<BulkItem[]>([]);
  
  const handleEventUpdate = (key : string, value: any) => {
    let keys = key.split(".");
    if(keys.length > 1) {
      seteventDetail((prev) => ({
        ...prev,
        event: {
          ...prev.event,
          [keys[1]]: value
        }
      }));
    }else {
      seteventDetail((prev) => ({
        ...prev,
        [key]: value
      }));
    }
  }
  
  const handleBulkOrder = ({id, qyt} : BulkItem) => {
    let tempBulk = [...orderBulk];
    let exist = tempBulk.find(item => item.id === id);
    
    if(exist) {
      exist.qyt = qyt;
    }else {
      tempBulk.push({id, qyt})
    }
    
    setOrderBulk(tempBulk);
  }
  
  
  
  const { menus , addToCartBulk} = useCart();
  /* const generateTimeOptions = (startHour = 0, endHour = 23, interval = 60) => {
    const timeOptions = [];
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        const timeLabel = `${formattedHour}:${formattedMinute}`;
        const timeValue = `${formattedHour}:${formattedMinute}`;
        timeOptions.push({ label: timeLabel, value: timeValue });
      }
    }
    return timeOptions;
  }; */


  return (
    <div className="min-h-[74vh] mb-20 flame-regular">
      <div className="w-full flex flex-col justify-start">
        <div className="w-full mb-10">
          <Link href={"/large-order"}>
            <img src="/images/bulk_order_header.jpg" className="w-full" alt="bulk image" />
          </Link>
        </div>
        <div className="w-2/4  shadow-md mx-auto bg-white">
          <div className="left-side px-3">
            <div>
              <div>
                <p>RAMEIN ACARAMU BARENG BK!</p>
              </div>
              <div>
                <p className="">Pilih Paket (Minimum order 20 pax/Paket)</p>
                <div className="flex flex-col px-3">
                  {menus.map(item => {
                    return (
                      <div key={item.id} className="flex my-2 p-2 flex-row w-[100%] bg-[#f9f4f2]">
                        <div className="w-3/4">
                          <span>{item.title}</span>
                        </div>
                        <div className="w-fit border">
                          <input 
                          onChange={(e) => {
                            let bulk : BulkItem = {
                              id: item.id,
                              qyt: parseInt(e.target.value)
                            }
                            handleBulkOrder(bulk);
                          }}
                          value={orderBulk.find((bulk) => item.id === bulk.id)?.qyt || 0} className="px-1 rounded-md" placeholder="jumlah" />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div>
                <p>Lengkapi data diri kamu!</p>
                <div className="user-form w-full">
                  <input
                  value={eventDetail.buyerName}
                  onChange={(e) => {
                    handleEventUpdate('buyerName', e.target.value);
                  }}
                  className="w-6/12" type="text" placeholder="Nama" />
                  <input
                    className="w-4/12"
                    type="text"
                    placeholder="No Handphone"
                    value={eventDetail.phone}
                    onChange={(e) => {
                      handleEventUpdate('phone', e.target.value);
                    }}
                  />
                  <input 
                  value={eventDetail.email}
                  onChange={(e) => {
                    handleEventUpdate('email', e.target.value);
                  }}
                  className="w-6/12" type="email" placeholder="Email" />
                  <div className="w-4/12">
                  <ReactDatePicker 
                    className=" p-1 border border-black"
                    selected={eventDetail.birthDate}
                    placeholderText="Tanggal Lahir"
                    onChange={(date: Date | null) => {
                      handleEventUpdate('birthDate', date);
                    }}
                    />
                  </div>
                  <textarea
                    rows={4}
                    cols={60}
                    placeholder="Alamat"
                    value={eventDetail.address}
                  onChange={(e) => {
                    handleEventUpdate('address', e.target.value);
                  }}
                    className="col-span-12  border border-slate-900 mx-[10px]"
                  />
                </div>
              </div>
              <div>
                <p>Detail Acara!</p>
                <div className="w-full grid grid-cols-6 px-1" >
                  <div className="col-span-6 mb-3">
                    <input 
                    value={eventDetail.event.name}
                    onChange={(e) => {
                      handleEventUpdate('event.name', e.target.value);
                    }}
                    className="w-full border border-black px-1" type="text" placeholder="Nama" />
                  </div>
                  <div className="col-span-3 flex items-center">
                    <Select
                      className="w-full"
                      instanceId={useId()}
                      options={[...timeOptions]}
                      onChange={(e) => {
                          handleEventUpdate('event.startTime', e);
                      }}
                      inputValue={""}
                      value={eventDetail.event.startTime}
                    />
                  </div>
                  <div className="col-span-3 flex items-center ml-3 w-full">
                    <ReactDatePicker 
                    className=" p-1 border border-black"
                    selected={eventDetail.event.startDateTime}
                    placeholderText="Start Date"
                    onChange={(date: Date | null) => {
                      handleEventUpdate('event.startDateTime', date);
                    }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <p>Catatan</p>
                <div className="user-form w-full">
                  <textarea
                    rows={4}
                    cols={60}
                    value={eventDetail.event.note}
                    onChange={(e) => {
                      handleEventUpdate('event.note', e.target.value);
                    }}
                    placeholder="Tulis request menu lain disini!"
                    className="col-span-12  border border-slate-900 mx-[10px]"
                  />
                </div>
              </div>
              <div className="">
                <button
                onClick={() => {
                  if(orderBulk.length < 1) return;
                  
                  let bulkTemp: CartItem[] = orderBulk.map((item) => {
                    let menuItem = menus.find((menu) => menu.id === (item.id));
                    return {
                      id: parseInt(item.id),
                      name: menuItem?.title || '',
                      price: (menuItem?.price || 1) * item.qyt,
                      quantity: item.qyt
                    }
                  });
                  addToCartBulk(bulkTemp);
                  alert('added to cart')
                }}
                >SUBMIT</button>
              </div>
            </div>
          </div>
          <div className="right-side"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
