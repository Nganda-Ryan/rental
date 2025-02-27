"use client"
import React from "react";
import {
  ArrowLeft,
  Building2,
  BedDouble,
  Bath,
  Square,
  Users,
  WrenchIcon,
  Calendar,
  MapPin,
} from "lucide-react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const PropertyDetail = () => {
  const property = {
    id: "1",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    address: "123 Marina Avenue",
    location: "San Francisco, CA 94107",
    units: 4,
    price: "$2,500",
    beds: 2,
    baths: 2,
    sqft: 1200,
    status: "Occupied",
    yearBuilt: "2015",
    lastRenovated: "2021",
    description: "Modern apartment complex featuring contemporary design and premium amenities. Located in a prime location with easy access to public transportation and local attractions.",
    amenities: [
      "Parking",
      "Swimming Pool",
      "Gym",
      "Pet Friendly",
      "Security System",
    ],
    currentTenants: [
      {
        name: "John Smith",
        unit: "4B",
        since: "Jan 2023",
      },
      {
        name: "Sarah Johnson",
        unit: "2A",
        since: "Mar 2023",
      },
    ],
    recentMaintenance: [
      {
        date: "Jul 1, 2023",
        issue: "HVAC Maintenance",
        status: "Completed",
      },
      {
        date: "Jun 15, 2023",
        issue: "Plumbing Repair",
        status: "Completed",
      },
    ],
  };
  return (
    <DefaultLayout>
        <Breadcrumb pageName="House detail" />
        <div className="my-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Property Image */}
                    <div className="rounded-lg overflow-hidden h-[400px]">
                        <img
                        src={property.image}
                        alt={property.address}
                        className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Property Info */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h2 className="text-xl font-semibold mb-2">
                                    {property.address}
                                </h2>
                                <div className="flex items-center text-gray-600">
                                    <MapPin size={16} className="mr-1" />
                                    <span>{property.location}</span>
                                </div>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm ${property.status === "Occupied" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                                {property.status}
                            </span>
                        </div>
                        <div className="grid grid-cols-4 gap-4 py-4 border-y border-gray-100">
                            <div className="flex items-center gap-2">
                                <Building2 size={20} className="text-gray-400" />
                                <div>
                                <p className="text-sm text-gray-500">Units</p>
                                <p className="font-medium">{property.units}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <BedDouble size={20} className="text-gray-400" />
                                <div>
                                <p className="text-sm text-gray-500">Beds</p>
                                <p className="font-medium">{property.beds}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Bath size={20} className="text-gray-400" />
                                <div>
                                <p className="text-sm text-gray-500">Baths</p>
                                <p className="font-medium">{property.baths}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Square size={20} className="text-gray-400" />
                                <div>
                                <p className="text-sm text-gray-500">Sqft</p>
                                <p className="font-medium">{property.sqft}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-medium mb-2">Description</h3>
                            <p className="text-gray-600">{property.description}</p>
                        </div>
                    </div>
                    {/* Amenities */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h3 className="font-medium mb-4">Amenities</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {property.amenities.map((amenity) => (
                                <div
                                key={amenity}
                                className="px-4 py-2 bg-gray-50 rounded-lg text-sm"
                                >
                                {amenity}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Quick Actions */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h3 className="font-medium mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                        <button className="w-full px-4 py-2 bg-[#2A4365] text-white rounded-lg hover:bg-blue-800">
                            Edit Property
                        </button>
                        <button className="w-full px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                            Download Documents
                        </button>
                        </div>
                    </div>
                    {/* Current Tenants */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <Users size={20} className="text-gray-400" />
                            <h3 className="font-medium">Current Tenants</h3>
                        </div>
                        <div className="space-y-3">
                            {property.currentTenants.map((tenant, index) => (
                                <div
                                key={index}
                                className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                                >
                                <div>
                                    <p className="font-medium">{tenant.name}</p>
                                    <p className="text-sm text-gray-500">Unit {tenant.unit}</p>
                                </div>
                                <p className="text-sm text-gray-500">Since {tenant.since}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Recent Activity */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                        <WrenchIcon size={20} className="text-gray-400" />
                        <h3 className="font-medium">Recent Activity</h3>
                        </div>
                        <div className="space-y-3">
                        {property.recentMaintenance.map((item, index) => (
                            <div
                            key={index}
                            className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                            >
                            <div>
                                <p className="font-medium">{item.issue}</p>
                                <p className="text-sm text-gray-500">{item.date}</p>
                            </div>
                            <span className="text-sm text-green-600">{item.status}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DefaultLayout>
  );
};

export default PropertyDetail