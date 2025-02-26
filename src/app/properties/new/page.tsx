"use client"
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import React, { useRef, useState } from 'react'
import { Button, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon, PencilSquareIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx';
import { ComplementaryInfoFormRef, PropertiesGeneralInfoFormRef } from '@/types/FormTypes';
import PropertiesGeneralInfoForm from '@/components/feature/Properties/PropertiesGeneralInfoForm';
import ComplementaryInfoForm from '@/components/feature/Properties/ComplementaryInfoForm'
import Loader from '@/components/Loader';
import PhotosForm from '@/components/feature/Properties/PhotosForm';

const categories = [
  { name: 'Informations générales', id: 1 },
  { name: 'Informations complémentaires', id: 2 },
  { name: 'Photos', id: 3 }
]

const Page = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [validatedSteps, setValidatedSteps] = useState<number[]>([0]);
  const [isLoading, setIsloading] = useState(false);
  const step1FormRef = useRef<PropertiesGeneralInfoFormRef>(null);
  const step2FormRef = useRef<ComplementaryInfoFormRef>(null);
  
  
  
  const goNext = () => {
    if (selectedIndex < categories.length - 1) {
      setIsloading(true);
      const nextIndex = selectedIndex + 1;
      setSelectedIndex(nextIndex);
      if (!validatedSteps.includes(nextIndex)) {
        setValidatedSteps((prev) => [...prev, nextIndex]);
      }
      setIsloading(false);
    }
  };

  const goPrevious = () => {
    if (selectedIndex > 0) {
      setIsloading(true);
      setSelectedIndex(selectedIndex - 1);
      setIsloading(false);
    }
  };

  const handleTabChange = (index: number) => {
    if (index <= Math.max(...validatedSteps)) {
      setSelectedIndex(index);
    }
  };

  
    
  const handleReset = () => {
    step1FormRef.current?.reset();
  };

  const handleSetValue = () => {
      step1FormRef.current?.setValue('email', 'test@example.com');
  };

  const handleTriggerValidation = async () => {
      const isValid = await step1FormRef.current?.trigger();
      console.log('Form is valid:', isValid);
  };

  const handleGetValues = () => {
      const values = step1FormRef.current?.getValues();
      const values2 = step2FormRef.current?.getValues();
      console.log('Step 1 Form values:', values);
      console.log('Step 2 Form values:', values2);
  };


  return (
    <DefaultLayout>
      <Breadcrumb pageName="Locatif / nouveau" />
      <div className="rounded-sm border border-stroke bg-white px-4 py-6 shadow-default dark:border-strokedark dark:bg-boxdark lg:px-7.5">

        <TabGroup selectedIndex={selectedIndex} onChange={handleTabChange}>
          {/* Onglets pour desktop */}
          <TabList className="gap-2 hidden md:flex">
            {categories.map(({ name }, index) => (
              <Tab
                key={index}
                className={clsx(
                  "rounded-sm py-2 px-3 text-sm font-semibold focus:outline-none dark:text-slate-100 ",
                  index === selectedIndex && "bg-slate-100 dark:bg-transparent border border-slate-200 dark:border-slate-700 border-b-0",
                  Math.max(...validatedSteps) > index && "text-green-600 dark:text-green-500",
                  Math.max(...validatedSteps) == index && "text-blue-500 dark:text-blue-500",
                )}
              >
                {name}
                {Math.max(...validatedSteps) > index && <CheckIcon className="ml-2 inline h-4 w-4"/>}
                {Math.max(...validatedSteps) == index && <PencilSquareIcon className="ml-2 inline h-4 w-4"/>}
              </Tab>
            ))}
          </TabList>

          {/* Liste déroulante pour mobile */}
          <Listbox value={categories[selectedIndex]} onChange={(cat) => handleTabChange(categories.findIndex(c => c.id === cat.id))}>
            <ListboxButton className="block md:hidden relative w-full rounded-sm border dark:border-strokedark dark:bg-boxdark border-slate-200 py-1.5 pr-8 pl-3 text-left text-sm/6 dark:text-slate-50">
              {categories[selectedIndex].name}
              <ChevronDownIcon className="pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60" />
            </ListboxButton>

            <ListboxOptions className="absolute z-50 rounded-sm bg-white dark:bg-boxdark border dark:border-strokedark shadow-lg w-[var(--button-width)] overflow-hidden">
              {categories.map((category, index) => (
                <ListboxOption
                  key={category.id}
                  value={category}
                  disabled={index > Math.max(...validatedSteps)}
                  className={clsx(
                    "cursor-pointer px-4 py-2",
                    index > Math.max(...validatedSteps) && "cursor-not-allowed opacity-50",
                    Math.max(...validatedSteps) > index && "text-green-600",
                    Math.max(...validatedSteps) == index && "text-blue-500",
                  )}
                >
                  {category.name}
                  {Math.max(...validatedSteps) > index && <CheckIcon className="ml-2 inline h-4 w-4"/>}
                  {Math.max(...validatedSteps) == index && <PencilSquareIcon className="ml-2 inline h-4 w-4"/>}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>


          {/* Contenu des panneaux */}
          <TabPanels className="">
            <header className='bg-slate-100 dark:bg-transparent border border-slate-200 dark:border-slate-700 py-1.5 px-2 hidden md:block'>
              <h1>{categories[selectedIndex].name}</h1>
            </header>
            <div className="relative">
              <div className='border border-t-0 border-slate-200 dark:border-slate-700'>
                <TabPanel className="p-2">
                  <div className='max-w-6xl'>
                    <PropertiesGeneralInfoForm ref={step1FormRef} />
                  </div>
                </TabPanel>
                <TabPanel className="p-2">
                  <div className='max-w-4xl'>
                    <ComplementaryInfoForm ref={step2FormRef} />
                  </div>
                </TabPanel>
                <TabPanel className="p-2">
                  <PhotosForm></PhotosForm>
                </TabPanel>
              </div>
              <footer className='rounded-b-md bg-slate-100 dark:bg-transparent dark:border-slate-700 border border-slate-200 border-t-0 p-1.5 flex justify-end gap-6'>
                <Button
                  onClick={goPrevious}
                  disabled={selectedIndex === 0}
                  className={clsx(
                    "inline-flex items-center gap-2 rounded-sm bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white",
                    selectedIndex === 0 ? "bg-gray-500 cursor-not-allowed" : "bg-gray-700 hover:bg-gray-600"
                  )}
                >
                  Précédent
                </Button>
                <Button
                  onClick={goNext}
                  disabled={selectedIndex === categories.length - 1}
                  className={clsx(
                    "inline-flex items-center gap-2 rounded-sm bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white",
                    selectedIndex === categories.length - 1 ? "bg-gray-500 cursor-not-allowed" : "bg-gray-700 hover:bg-gray-600"
                  )}
                >
                  Suivant
                </Button>
                <Button
                  onClick={handleGetValues}
                  className={clsx(
                    "inline-flex items-center gap-2 rounded-sm bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white",
                    selectedIndex === categories.length - 1 ? "bg-gray-500 cursor-not-allowed" : "bg-gray-700 hover:bg-gray-600"
                  )}
                >
                  Get datas
                </Button>
              </footer>
            </div>
          </TabPanels>
        </TabGroup>
      </div>
      {isLoading && <Loader />}
    </DefaultLayout>
  );
};

export default Page;
