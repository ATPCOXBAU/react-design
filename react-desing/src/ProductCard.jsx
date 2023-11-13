
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { } from '@heroicons/react'
  
export function ProductCard() {
    return (
      <Card className="w-40 bg-white mt-7 mb-7    md:w-80    hover:shadow-2xl delay-100  ">
        <CardHeader shadow={true} floated={false} >
        <div className=" h-40 md:h-80 lg:h-40 ">
          <img  src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
            alt="card-image"  className=" object-center object-cover   md:h-full md:w-full"/>
        </div>
  
        </CardHeader>
        <CardBody>
          <div className=" flex flex-wrap items-center justify-between rounded    ">
            <Typography color="blue-gray" className="font-bold">
              $95.00
            </Typography>
            <Typography color="blue-gray" className="font-medium break-all truncate   ">
              Apple AirPodsAirPodsAirPodsAi rPodsAirPodsAirPodsAirPodsAirPodsAirPods rPodsAirPodsAirPodsAirPodsAirPodsAirPodsrPodsAirPodsAirPodsAirPodsAirPodsAirPodsrPodsAirPodsAirPodsAirPodsAirPodsAirPodsrPodsAirPodsAirPodsAirPodsAirPodsAirPodsrPodsAirPodsAirPodsAirPodsAirPodsAirPodsrPodsAirPodsAirPodsAirPodsAirPodsAirPodsrPodsAirPodsAirPodsAirPodsAirPodsAirPodsrPodsAirPodsAirPodsAirPodsAirPodsAirPodsrPodsAirPodsAirPodsAirPodsAirPodsAirPodsrPodsAirPodsAirPodsAirPodsAirPodsAirPods
            </Typography>
         
          </div>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal opacity-75  "
          >
            With plenty of talk and listen time, voice-activated Siri access, and
            an available wireless charging case.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}z
            fullWidth={true}
  
            className="bg-egreen-300 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Ver Detalles
          </Button>
        </CardFooter>
      </Card>
    );
  }
  