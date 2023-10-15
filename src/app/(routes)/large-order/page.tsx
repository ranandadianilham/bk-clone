"use client";
import Link from "next/link";
import {timeOptions, timeOptType} from "@/app/_datas/time-picker";
import React, { useEffect, useId, useState } from "react";
import { SingleValue, ActionMeta, InputActionMeta } from "react-select";
import Select from "react-select";
import TimePicker from "react-time-picker";
type Props = {};

const page = (props: Props) => {
  const [selectedTime, setSelectedTime] = useState<timeOptType>(timeOptions[0]);

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

  const handleTimeChange = (selectedOption: any) => {
    setSelectedTime(selectedOption);
  };

  

  useEffect(() => {
  }, []);

  return (
    <div className="min-h-[74vh] mb-20">
      <div className="w-full flex flex-col justify-start">
        <div className="w-full mb-10">
          <Link href={"/large-order"}>
            <img src="/images/bulk_order_header.jpg" className="w-full" />
          </Link>
        </div>
        <div className="w-2/4 border border-red-700 mx-auto">
          <div className="left-side">
            <form>
              <div>
                <p>RAMEIN ACARAMU BARENG BK!</p>
              </div>
              <div>
                <p className="">Pilih Paket (Minimum order 20 pax/Paket)</p>
                <div></div>
              </div>
              <div>
                <p>Lengkapi data diri kamu!</p>
                <div className="user-form w-full">
                  <input className="w-6/12" type="text" placeholder="Nama" />
                  <input
                    className="w-4/12"
                    type="text"
                    placeholder="No Handphone"
                  />
                  <input className="w-6/12" type="text" placeholder="Email" />
                  <input
                    className="w-4/12"
                    type="text"
                    placeholder="Tanggal Lahir"
                  />
                  <textarea
                    rows={4}
                    cols={60}
                    placeholder="Alamat"
                    className="col-span-12  border border-slate-900 mx-[10px]"
                  />
                </div>
              </div>
              <div>
                <p>Detail Acara!</p>
                <div className="user-form w-full" >
                  <input className="w-full" type="text" placeholder="Nama" />
                  <Select
                    instanceId={useId()}
                    options={[...timeOptions]}
                    onChange={(e) => {
                        
                    }}
                    inputValue={""}
                    value={selectedTime}
                  />
                  <input className="w-4/12" type="text" placeholder="Email" />
                  <textarea
                    rows={4}
                    cols={60}
                    placeholder="Alamat"
                    className="col-span-12  border border-slate-900 mx-[10px]"
                  />
                </div>
              </div>
              <div>
                <p>Catatan</p>
                <div className="user-form w-full">
                  <textarea
                    rows={4}
                    cols={60}
                    placeholder="Tulis request menu lain disini!"
                    className="col-span-12  border border-slate-900 mx-[10px]"
                  />
                </div>
              </div>
              <div>
                <button>SUBMIT</button>
              </div>
            </form>
          </div>
          <div className="right-side"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
