"use client"
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import DropdownFilter from "@/components/DropdownFilter";
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ColDef, ModuleRegistry } from 'ag-grid-community'; 
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableThree from "@/components/Tables/TableThree";
import { Property } from "@/types/Property";
import { useState } from "react";
import { ComponentWidth } from '@/types/componentSize'


ModuleRegistry.registerModules([AllCommunityModule]);


const CalendarPage = () => {
  const [packageData, setPackageData] = useState<Property[]>([
    {
      name: "Basic Plan",
      type: "Residential",
      price: 500,
      area: "Downtown",
      busy: false,
      rent: 50,
    },
    {
      name: "Standard Plan",
      type: "Commercial",
      price: 1200,
      area: "Uptown",
      busy: true,
      rent: 120,
    },
    {
      name: "Premium Plan",
      type: "Residential",
      price: 2500,
      area: "Suburbs",
      busy: false,
      rent: 200,
    },
    {
      name: "Business Pro",
      type: "Commercial",
      price: 4000,
      area: "Business District",
      busy: true,
      rent: 350,
    },
    {
      name: "Luxury Suite",
      type: "Residential",
      price: 8000,
      area: "Beachfront",
      busy: false,
      rent: 700,
    },
    {
      name: "Office Space",
      type: "Commercial",
      price: 3000,
      area: "Downtown",
      busy: true,
      rent: 280,
    },
    {
      name: "Startup Hub",
      type: "Commercial",
      price: 1500,
      area: "Tech Park",
      busy: false,
      rent: 150,
    },
    {
      name: "Budget Stay",
      type: "Residential",
      price: 700,
      area: "Midtown",
      busy: false,
      rent: 60,
    },
    {
      name: "Corporate Suite",
      type: "Commercial",
      price: 5000,
      area: "Financial District",
      busy: true,
      rent: 450,
    },
    {
      name: "Vacation Home",
      type: "Residential",
      price: 3500,
      area: "Countryside",
      busy: false,
      rent: 300,
    },
  ]);

  const dataList = [
    { id: '1', value: 'Option 1' },
    { id: '2', value: 'Option 2' },
    { id: '3', value: 'Option 3' },
  ];

  const handleSelected = (selected: { id: string; value: string } | null) => {
    console.log('Selected:', selected);
  };


  const [colDefs, setColDefs] = useState<ColDef[]>([
    { field: "name" },
    { field: "price" },
    { field: "area" },
    { field: "busy" },
    { field: "rent" },
  ]);
  
  const defaultColDef = {
    flex: 1,
  };
  

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Locatif" />
      <div className="rounded-sm border border-stroke bg-white px-4 py-6 shadow-default dark:border-strokedark dark:bg-boxdark lg:px-7.5">
        <div className="mx-auto max-w-full overflow-x-auto">
          <div>
            <span className="font-bold">Filtrer</span> Utiliser les options pour filtrer
          </div>
          <div className="flex justify-start gap-6">
            <DropdownFilter dataList={dataList} handleSelected={handleSelected} label="label" size="w-60"/>
            <DropdownFilter dataList={dataList} handleSelected={handleSelected} label="label2" size="w-60"/>
            <DropdownFilter dataList={dataList} handleSelected={handleSelected} label="label3" size="w-60"/>
          </div>

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          <div>
            <div>LOUE/NON LOUE</div>
            <div>VALEUR LOCATIVE</div>
            <div>VALEUR DES ACTIFS</div>
          </div>

        </div>
      </div>
      <div className="mt-4 rounded-sm border border-stroke bg-white px-4 py-6 shadow-default dark:border-strokedark dark:bg-boxdark lg:px-7.5">
        <div className="mx-auto max-w-full overflow-x-auto">
          <AgGridReact
            rowData={packageData}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
            domLayout="autoHeight"
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CalendarPage;
