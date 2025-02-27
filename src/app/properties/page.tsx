"use client"
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Property } from "@/types/Property";
import { useState } from "react";
import { Button } from "@headlessui/react";
import { useRouter } from 'next/navigation'
import PropertyCard from "@/components/Cards/PropertyCard";
import { Search, SlidersHorizontal } from "lucide-react";


ModuleRegistry.registerModules([AllCommunityModule]);


const PropertiesPage = () => {
  const [packageData, setPackageData] = useState<Property[]>([
    {
      id: "propCM001",
      title: "Appartement T3 Bonapriso",
      location: "Douala, Bonapriso",
      price: 350000,
      imageUrl: "/images/apartment/img-1.jpg",
      bedrooms: 2,
      bathrooms: 1,
      livingRooms: 1,
      status: "available"
    },
    {
      id: "propCM002",
      title: "Villa Moderne avec Piscine",
      location: "Yaoundé, Bastos",
      price: 1500000,
      imageUrl: "/images/apartment/img-2.jpg",
      bedrooms: 5,
      bathrooms: 4,
      livingRooms: 2,
      status: "available"
    },
    {
      id: "propCM003",
      title: "Studio Meublé Akwa",
      location: "Douala, Akwa",
      price: 200000,
      imageUrl: "/images/apartment/img-3.jpg",
      bedrooms: 1,
      bathrooms: 1,
      livingRooms: 0,
      status: "available"
    },
    {
      id: "propCM004",
      title: "Maison Familiale",
      location: "Bafoussam, Quartier Résidentiel",
      price: 600000,
      imageUrl: "/images/apartment/img-4.jpg",
      bedrooms: 4,
      bathrooms: 3,
      livingRooms: 2,
      status: "available"
    },
    {
      id: "propCM005",
      title: "Appartement Luxueux",
      location: "Yaoundé, Golf",
      price: 1200000,
      imageUrl: "/images/apartment/img-5.jpg",
      bedrooms: 3,
      bathrooms: 2,
      livingRooms: 1,
      status: "available"
    },
    {
      id: "propCM006",
      title: "Bungalow Bord de Mer",
      location: "Kribi, Plage",
      price: 800000,
      imageUrl: "/images/apartment/img-6.jpg",
      bedrooms: 2,
      bathrooms: 1,
      livingRooms: 1,
      status: "available"
    },
    {
      id: "propCM007",
      title: "Duplex Spacieux",
      location: "Douala, Bonamoussadi",
      price: 1000000,
      imageUrl: "/images/apartment/img-7.jpg",
      bedrooms: 5,
      bathrooms: 3,
      livingRooms: 2,
      status: "available"
    },
    {
      id: "propCM008",
      title: "Appartement T2 Meublé",
      location: "Yaoundé, Mvog-Mbi",
      price: 300000,
      imageUrl: "/images/apartment/img-8.jpg",
      bedrooms: 2,
      bathrooms: 1,
      livingRooms: 1,
      status: "available"
    },
    {
      id: "propCM009",
      title: "Maison Coloniale",
      location: "Douala, Bonanjo",
      price: 950000,
      imageUrl: "/images/apartment/img-9.jpg",
      bedrooms: 4,
      bathrooms: 2,
      livingRooms: 2,
      status: "available"
    },
    {
      id: "propCM010",
      title: "Studio Étudiant",
      location: "Yaoundé, Ngoa-Ekelle",
      price: 150000,
      imageUrl: "/images/apartment/img-10.jpg",
      bedrooms: 1,
      bathrooms: 1,
      livingRooms: 0,
      status: "available"
    },
    {
      id: "propCM011",
      title: "Résidence Haut Standing",
      location: "Douala, Makepe",
      price: 1300000,
      imageUrl: "/images/apartment/img-11.jpg",
      bedrooms: 4,
      bathrooms: 3,
      livingRooms: 2,
      status: "available"
    },
    {
      id: "propCM012",
      title: "Chambre Meublée",
      location: "Buea, Molyko",
      price: 100000,
      imageUrl: "/images/apartment/img-12.jpg",
      bedrooms: 1,
      bathrooms: 1,
      livingRooms: 0,
      status: "available"
    },
    {
      id: "propCM013",
      title: "Maison avec Jardin",
      location: "Yaoundé, Nkolbisson",
      price: 700000,
      imageUrl: "/images/apartment/img-13.jpg",
      bedrooms: 3,
      bathrooms: 2,
      livingRooms: 1,
      status: "available"
    },
    {
      id: "propCM014",
      title: "Penthouse Vue Panoramique",
      location: "Douala, Bonapriso",
      price: 2000000,
      imageUrl: "/images/apartment/img-14.jpg",
      bedrooms: 6,
      bathrooms: 4,
      livingRooms: 3,
      status: "available"
    },
    {
      id: "propCM015",
      title: "Appartement Résidentiel",
      location: "Yaoundé, Omnisports",
      price: 900000,
      imageUrl: "/images/apartment/img-15.jpg",
      bedrooms: 3,
      bathrooms: 2,
      livingRooms: 1,
      status: "available"
    }
  ]);

  const router = useRouter()
  const dataList = [
    { id: '1', value: 'Option 1' },
    { id: '2', value: 'Option 2' },
    { id: '3', value: 'Option 3' },
  ];
  
  const handleSelected = (selected: { id: string; value: string } | null) => {
    console.log('Selected:', selected);
  };

  const hancleCardClick = (e: any) => {
    console.log('ID', e)
    router.push('properties/detail')
  }


  return (
    <DefaultLayout>
      <Breadcrumb pageName="Locatif" />
      
      <div className="my-10">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search properties..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200">
            <SlidersHorizontal size={20} />
            Filters
          </button>
          <Button
            onClick={() => router.push('/properties/new')} 
            className="inline-flex items-center gap-2 rounded-md bg-[#2A4365] py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            Nouveau Locatif
          </Button>
        </div>
      </div>

      <div className="justify-items-center grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-5">
        {packageData.map((property, index) => (
          <PropertyCard 
            key={property.id || index} 
            property={property} 
            className="h-full"
            onClick={hancleCardClick}
          />
        ))}
      </div>
    </DefaultLayout>
  );
};

export default PropertiesPage;
