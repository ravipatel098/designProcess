import { Component } from "react";
import { data } from "./Data/Data"

// Customizable Area Start

export interface ValidResponseType {
    data: object;
}

export interface ApiFailureData {
    errors: Array<ErrorPayloadType>;
}

export interface ErrorPayloadType {
    token: string;
}

export interface ApiDataType {
    contentType: string;
    method: string;
    endPoint: string;
    body?: object;
}

interface AddInfoData {
    id: number;
    value: string
}

interface MyComponentState {
    allFieldData: { [key: string]: string }[]; // Define the type for allFieldData
}

// Customizable Area End


export const configJSON = require("./config");

export interface Props {
    navigation: any;
    id: string;/*  */
    // Customizable Area Start
    // Customizable Area End
}

interface StateType {
    // Customizable Area Start
    items: Array<object>;
    applicstionNumber: string;
    applicantName: string;
    address: string;
    pincode: string;
    townCityDisctrict: string;
    stateUnionTeratiry: string;
    country: string;
    addInfoValue: Array<object>;
    allFieldData: Array<object>,
    applicantData: object
    // Customizable Area End
}

export interface CountriesList {
    Countries: Array<Countries>;

}

interface Countries {
    name: string,
    dial_code: string,
    code: string
}

export interface Gender {
    label: string,
    value: string
}

export interface Industry {
    label: string,
    value: string
}
export interface Country {
    label: string,
    value: string
}
interface SSType {
    SSTypeid: any;
    // Customizable Area Start
    // Customizable Area End
}

export default class CrudDataController extends Component<
    Props,
    StateType,
    SSType
> {
    // Customizable Area Start
    submitTransactionApiCallId: string = "";
    getOrderApiCallId: string = "";
    getFormFillingApiCallId: string = "";
    // Customizable Area End

    constructor(props: Props) {
        super(props);
        // Customizable Area Start

        this.state = {
            // Customizable Area Start
            items: [],
            applicstionNumber: "",
            applicantName: "",
            address: "",
            pincode: "",
            townCityDisctrict: "",
            stateUnionTeratiry: "",
            country: "",
            addInfoValue: [
                {
                    id: 1,
                    infoValue: "NP"
                },
                {
                    id: 2,
                    infoValue: "-"
                },
                {
                    id: 3,
                    infoValue: "John doe"
                },
                {
                    id: 4,
                    infoValue: "India"
                },
                {
                    id: 5,
                    infoValue: "IP Office, New Delhi Dwarika Sec -14"
                },
                {
                    id: 6,
                    infoValue: "110078"
                },
                {
                    id: 7,
                    infoValue: "-"
                },
                {
                    id: 8,
                    infoValue: "01125300290"
                },
                {
                    id: 9,
                    infoValue: "-"
                },
                {
                    id: 10,
                    infoValue: "Jondoe@gmail.com"
                },
                {
                    id: 11,
                    infoValue: "India"
                },
                {
                    id: 12,
                    infoValue: "Tamil Nadu"
                },
                {
                    id: 13,
                    infoValue: "00"
                },
                {
                    id: 14,
                    infoValue: "-"
                }
            ],
            allFieldData: [],
            applicantData: {}
            // Customizable Area End
        };

        // Customizable Area Start
        // Customizable Area End
    }

    // Customizable Area Start

    async componentDidMount() {

    };
    handleSubmit = (applicantValues: React.FormEvent<HTMLFormElement>) => {
        applicantValues.preventDefault();
        const applicantArray = Object.entries(this.state.allFieldData).map(([appData, value]) => ({
            appData,
            value
        }));
        this.setState({ applicantData: {} });
        console.log("@@@@@@=====", applicantArray)
    };


    handleInputChange = (event: any) => {
        const { name, value } = event.target
        this.setState((prevState) => ({
            applicantData: { ...prevState.applicantData, [name]: value, specificationSelectionError: false }
        }));
    };

    handleDeleteItem = (index: any) => {
        const { items }: any = this.state;
        const updatedItems = items.filter((_: any, i: any) => i !== index);
        this.setState({ items: updatedItems });
    };
    // Customizable Area End

}
