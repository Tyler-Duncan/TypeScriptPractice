import { User } from "./User";
import { Company } from "./Company";
import { company } from "faker";
import { Map } from "./Map";

const user = new User();

const company = new Company();

const map = new Map("map");

map.addMarker(user);

map.addMarker(company);


// console.log(user);
// console.log(company);