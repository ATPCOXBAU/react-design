import {
    Typography,
} from "@material-tailwind/react";
  import { ShoppingCartIcon } from "@heroicons/react/24/outline";
export function FooterWithLogo() {
    return (
      <footer className="w-full bg-white p-6">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
          <ShoppingCartIcon className="w-10"></ShoppingCartIcon>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-egreen-200 focus:text-egreen-200"
              >
                Sobre Nosotros
              </Typography>
            </li>

            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-egreen-200 focus:text-egreen-200"
              >
                Apoyanos
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-egreen-200 focus:text-egreen-200"
              >
                Contactenos
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography color="blue-gray" className="text-center font-normal">
          &copy; GT 2023
        </Typography>
      </footer>
    );
  }