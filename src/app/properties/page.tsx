"use client"
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import DropdownFilter from "@/components/DropdownFilter";
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ColDef, ModuleRegistry } from 'ag-grid-community'; 
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Property } from "@/types/Property";
import { useEffect, useState } from "react";
import PropertyTile from "@/components/Tile/PropertyTile";
import { Button } from "@headlessui/react";
import { colorSchemeDarkBlue, themeQuartz, colorSchemeLightCold } from "ag-grid-community";
import { useRouter } from 'next/navigation'


ModuleRegistry.registerModules([AllCommunityModule]);


const PropertiesPage = () => {
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
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      // browser code
      const item = window.localStorage.getItem("color-theme");
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : "light";
    }
  });

  useEffect(() => {
    const checkDarkMode = () => {
      const darkModeEnabled = document.body.classList.contains('dark');
      setIsDarkMode(darkModeEnabled);
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // Nettoyer l'observateur
    return () => observer.disconnect();
  }, []);


  const router = useRouter()
  const dataList = [
    { id: '1', value: 'Option 1' },
    { id: '2', value: 'Option 2' },
    { id: '3', value: 'Option 3' },
  ];
  
  const handleSelected = (selected: { id: string; value: string } | null) => {
    console.log('Selected:', selected);
  };

  const darkTheme = themeQuartz.withPart(colorSchemeDarkBlue);
  const lightTheme = themeQuartz.withPart(colorSchemeLightCold);

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
          <div className="flex justify-between">
            <div><span className="font-bold">Filtrer</span> Utiliser les options pour filtrer</div>
            <Button
              onClick={() => router.push('/properties/new')} 
              className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
              Nouveau Locatif
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
            <DropdownFilter dataList={dataList} handleSelected={handleSelected} label="Immeubles" size="w-full" placeholder="Tous les immeubles"/>
            <DropdownFilter dataList={dataList} handleSelected={handleSelected} label="Type" size="w-full" placeholder="Tous les types"/>
            <DropdownFilter dataList={dataList} handleSelected={handleSelected} label="Location" size="w-full" placeholder="Avec et sans location"/>
          </div>

          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 w-3" />

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
            <div className="w-full">
              <PropertyTile header="LOUE/NON LOUE" body="1/1"/>
            </div>
            <div className="w-full">
              <PropertyTile header="VALEUR LOCATIVE" body="0.00 €"/>
            </div>
            <div className="w-full">
              <PropertyTile header="VALEUR DES ACTIFS" body="0.00 €"/>
            </div>
          </div>

        </div>
      </div>

      <div className="mt-4 rounded-sm border border-stroke bg-white px-4 py-6 shadow-default dark:border-strokedark dark:bg-boxdark lg:px-7.5">
        <div className="mx-auto max-w-full overflow-x-auto ag-theme-balham">
          <AgGridReact
            rowData={packageData}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
            domLayout="autoHeight"
            theme={!isDarkMode ? lightTheme : darkTheme}
          />
        </div>
      </div>
      {/* 
       */}
    </DefaultLayout>
  );
};

export default PropertiesPage;
