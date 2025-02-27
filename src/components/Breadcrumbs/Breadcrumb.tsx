"use client"
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, ReactElement } from "react";

interface BreadcrumbProps {
  pageName: string;
}

const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  const pathname = usePathname();
  // Spécifions correctement le type pour inclure la possibilité de null
  const [pathElements, setPathElements] = useState<ReactElement[]>([]);
  
  useEffect(() => {
    // Cette fonction sera exécutée chaque fois que l'URL change
    const generatePaths = () => {
      const paths = pathname.split('/').filter(Boolean);
      const currentPath = paths[paths.length - 1];
      
      // Créons un tableau temporaire pour stocker les éléments non-null
      const elements: ReactElement[] = [];
      
      paths.forEach((path, index) => {
        if (index === 0) {
          elements.push(
            <li key={`path-${index}`} className={clsx("hover:text-indigo-500 hover:font-black",
              path === currentPath ? 'text-indigo-500' : ''
            )}>
              <Link className="font-medium" href={`/${path}`}>
                {path[0].toUpperCase() + path.slice(1)}
              </Link>
            </li>
          );
        } 
        else if (index > 0) {
          let strPath = '';
          for (let i = 0; i <= index; i++) {
            strPath += paths[i] + '/';
          }
          strPath = strPath.slice(0, -1);
          
          elements.push(
            <li key={`path-${index}`} className={clsx("hover:text-indigo-500 hover:font-black",
              path === currentPath ? 'text-indigo-500' : ''
            )}>
              <Link className="font-medium" href={`/${strPath}`}>
                / {path[0].toUpperCase() + path.slice(1)}
              </Link>
            </li>
          );
        }
      });
      
      // Maintenant nous pouvons mettre à jour l'état avec un tableau qui ne contient que des ReactElement
      setPathElements(elements);
    };
    
    generatePaths();
  }, [pathname]); // Dépendance au chemin d'URL
  
  return (
    <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" href="/">
              Dashboard /
            </Link>
          </li>
          {pathElements}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;