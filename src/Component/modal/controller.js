import { Component } from "react";

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

export interface ApplicantData {
    value: string;
}

export interface SpicificationData {
    value: string;
}

export interface ApplicantCopyData {
    id: number;
    infoProvide: string;
}

export interface AddPersonalInfoData {
    id: number;
    infoType: string;
}

export interface AddInventorData {
    id: number;
    infoInventorType: string;
}

export interface AddInfoData {
    id: number;
    infoValue: string;
}

export interface FormTypeData {
    id: number;
    type: string;
    name: string;
}

export interface CountryListData {
    id: string;
    value: string;
}

export interface FormValueData {
    target: DataValues;
}

export interface DataValues {
    value: string;
    name: string;
}

export interface CheckData {
    target: CheckObject;
}

export interface CheckObject {
    checked: boolean;
    value: string;
}

interface Main {
    data: [{
        id: number;
        type: string;
        attributes: {
            id: number;
            name: string;
            description: string;
            price: string;
            form_sections: {
                data: [
                    {
                        id: string;
                        type: string;
                        attributes: {
                            id: string;
                            name: string;
                            note: string;
                            position: number;
                            multiple: boolean;
                            form_fields: {
                                data: [
                                    {
                                        id: string;
                                        type: string;
                                        attributes: {
                                            id: string;
                                            field_name: string;
                                            field_type: string;
                                            note: string;
                                            field_value: null;
                                            position: number;
                                            required: boolean;
                                            form_values: Array<{
                                                id: string;
                                                value: string
                                            }>;
                                            file_value: null;
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    }]
}

interface MyState {
    "applicationNumber": string;
    "applicantName": string;
    "applicantAddress": string;
    "applicantPincode": string;
    "applicantCity": string;
    "applicantState": string;
    "applicantCountry": string;
}

interface InventorModalState {
    "inventorNumber": string;
    "inventorName": string;
    "inventorAddress": string;
    "inventorPincode": string;
    "inventorCity": string;
    "inventorState": string;
    "inventorCountry": string;
}

interface ErrorState {
    applicationNumberError: boolean;
    applicantNameError: boolean;
    applicantAddressError: boolean;
    applicantPincodeError: boolean;
    applicantCityError: boolean;
    applicantStateError: boolean;
    applicantCountryError: boolean;
}

interface InventorErrorState {
    inventorNumberError: boolean;
    inventorNameError: boolean;
    inventorAddressError: boolean;
    inventorPincodeError: boolean;
    inventorCityError: boolean;
    inventorStateError: boolean;
    inventorCountryError: boolean;
}

interface FormSubmit {
    selectedCheckboxes: string;
    selectedInfo: string;
    dictionSelected: string;
    typeSelection: string;
    specificationSelection: string;
    provisionalPart: string;
    additionalClaim: string;
    claimsPages: string;
    absractPageCount: string;
    drwaingPageCount: string;
    drwaingSequenceCount: string;
    drawingClaimsCount: string;
    drwaPriorityCount: string;
    serviceAddress: string;
    stateSelection: string;
    mobileNumberSelect: string;
    telephoneNumberSelect: string;
    emailSelection: string;
    alternativeEmail: string;
    abstractChange: string;
    descriptionChnage: string;
    claimsChange: string;
    checkboxValue: boolean;
}

type FormErrorState = {
    [keyValue: string]: boolean;
};
// Customizable Area End

export interface Props {
    navigation: any;
    id: string;/*  */
    // Customizable Area Start
    // Customizable Area End
}

interface StateType {
    // Customizable Area Start
    apiSuccess: Array<string>;
    formCheck: boolean;
    selectedCheckboxes: Array<string>;
    selectedInfo: Array<string>;
    cancelButton: boolean;
    addButton: boolean;
    applicantType: Array<ApplicantData>;
    specificationType: Array<SpicificationData>;
    applicantCopyData: Array<ApplicantCopyData>;
    addPersonalInfo: Array<AddPersonalInfoData>;
    addInfoInventorData: Array<AddInventorData>;
    addInfoValue: Array<AddInfoData>;
    inventorRequestSelected: boolean;
    formTypeSelect: Array<FormTypeData>;
    checkboxValueError: boolean;
    checkboxValue: boolean;
    inventorformModalVisible: boolean;
    applicanformModalVisible: boolean;
    countryList: Array<CountryListData>;
    applicantFormError: boolean;
    resertAllForm: boolean;
    saveAllForm: boolean;
    uploadAllForm: boolean;
    dictionSelected: string;
    dictionSelectedError: boolean;
    typeSelection: string;
    typeSelectionError: boolean;
    specificationSelection: string;
    specificationSelectionError: boolean;
    provisionalPart: string;
    provisionalPartError: boolean;
    additionalClaim: string;
    additionalClaimError: boolean;
    claimsPages: string;
    claimsPagesError: boolean;
    absractPageCount: string;
    absractPageCountError: boolean;
    drwaingPageCount: string;
    drwaingPageCountError: boolean;
    drwaingSequenceCount: string;
    drwaingSequenceCountError: boolean;
    drawingClaimsCount: string;
    drawingClaimsCountError: boolean;
    drwaPriorityCount: string;
    drwaPriorityCountError: boolean;
    changeApplicantionType: string;
    changeApplicantionTypeError: boolean;
    serviceAddress: string;
    serviceAddressError: boolean;
    stateSelection: string;
    stateSelectionError: boolean;
    mobileNumberSelect: string;
    mobileNumberSelectError: boolean;
    telephoneNumberSelect: string;
    telephoneNumberSelectError: boolean;
    emailSelection: string;
    emailSelectionError: boolean;
    alternativeEmail: string;
    alternativeEmailError: boolean;
    abstractChange: string;
    abstractChangeError: boolean;
    descriptionChnage: string;
    descriptionChnageError: boolean;
    claimsChange: string;
    claimsChangeError: boolean;
    responseError: string;
    inventorNumber: string;
    inventorNumberError: boolean;
    applicantName: string;
    applicantNameError: boolean;
    applicantAddress: string;
    applicantAddressError: boolean;
    applicantPincode: string;
    applicantPincodeError: boolean;
    applicantCity: string;
    applicantCityError: boolean;
    applicantState: string;
    applicantStateError: boolean;
    applicantCountry: string;
    applicantCountryError: boolean;
    headingModal: string;
    openSavedModal: boolean;
    modalHeader: string;
    openFailedModal: boolean;
    hasErrorForFields: object;
    applicationNumber: string;
    applicationNumberError: boolean;
    inventorName: string;
    inventorNameError: boolean;
    inventorAddress: string;
    inventorAddressError: boolean;
    inventorPincode: string;
    inventorPincodeError: boolean;
    inventorCity: string;
    inventorCityError: boolean;
    inventorState: string;
    inventorStateError: boolean;
    inventorCountry: string;
    inventorCountryError: boolean;
    items: any;
    formData: any;
    // Customizable Area End
}

interface FormikData {
    first_name: string,
    last_name: string,
    email: string,
    selectedPhoneCountry: string,
    phone_number: string,
    selectedGender?: string,
    selectedCountry?: string,
    message?: string,
    selectedIndustry?: string,
    countries: Array<object>
}

interface CustomTypeData {
    contentType: string,
    method: string,
    body: {
        data: CustomTypeBodyData
    },
    endPoint: string,
}

interface CustomTypeBodyData {
    attributes: {
        first_name: string,
        last_name: string,
        phone_number: string,
        email: string,
        gender: string,
        country: string,
        industry: string,
        message: string
    },
    type: string,
}



interface CustomTypeSubmitvalues {
    first_name: string,
    last_name: string,
    selectedPhoneCountry: string,
    phone_number: string,
    email: string,
    countries: Array<object>,
    selectedGender?: string,
    selectedCountry?: string,
    selectedIndustry?: string,
    message?: string,
}

interface CustomTypevalues {
    first_name: string,
    last_name: string,
    selectedPhoneCountry: string,
    phone_number: string,
    email: string,
    selectedGender: string,
    selectedCountry: string,
    selectedIndustry: string,
    message: string,
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

export default class MultipageFormsController extends Component<
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
        this.state = {
            // Customizable Area Start
            apiSuccess: [],
            formCheck: false,
            selectedCheckboxes: [],
            selectedInfo: [],
            cancelButton: false,
            addButton: true,
            applicantType: [
                {
                    value: "Conventional Application"
                }
            ],
            specificationType: [
                {
                    value: "Provsional"
                },
                {
                    value: "Specification"
                },
                {
                    value: "ProvsionalData"
                }
            ],
            applicantCopyData: [
                {
                    id: 1,
                    infoProvide: "The Provisional specification relating to the invention is filed with this application."
                },
                {
                    id: 2,
                    infoProvide: "The Complete specification relating to the invention is filed with this application."
                },
                {
                    id: 3,
                    infoProvide: "I am/We are. in the possession of the above mentioned invention."
                },
                {
                    id: 4,
                    infoProvide: "The invention as disclosed in the specification uses the biological material from India and the necessary permission from the competent authority shall be submitted by me/us, before the grant of the patent to me/us."
                },
                {
                    id: 5,
                    infoProvide: "There is no lawful ground of objection to the grant of the Patent to me/us."
                },
                {
                    id: 6,
                    infoProvide: "I am/We are, the assignee or legal representative to true first inventors."
                },
                {
                    id: 7,
                    infoProvide: "The application or each of the applications, particulars of which are given in Para-5 was the first application in convention country/countries in respect of my/our invention."
                },
                {
                    id: 8,
                    infoProvide: "I/We claim the priority from the above mentioned application(s) filed in convention country/countries and state that no application for protection in respect of the invention had been made in a convention country before that date by me/us or by any person from which I/We derive the title."
                },
                {
                    id: 9,
                    infoProvide: "My/Our application in India is based on International application under Patent Corporation Treaty (PCT) as mentioned in Para-6."
                },
                {
                    id: 10,
                    infoProvide: "The application is divided out of my/our application, particulars of which are given in Para-7 and pray that this application is treated as deemed to have been filed on ------------ under Sec. 16 of the Act."
                },
                {
                    id: 11,
                    infoProvide: "The said invention is an improvement in or modification of the invention, particulars of which are given in Para-8."
                }
            ],
            addPersonalInfo: [
                {
                    id: 1,
                    infoType: "Type -"
                },
                {
                    id: 2,
                    infoType: "Gender -"
                },
                {
                    id: 3,
                    infoType: "Name -"
                },
                {
                    id: 4,
                    infoType: "Nationality -"
                },
                {
                    id: 5,
                    infoType: "Address -"
                },
                {
                    id: 6,
                    infoType: "PIN -"
                },
                {
                    id: 7,
                    infoType: "STD -"
                },
                {
                    id: 8,
                    infoType: "Phone -"
                },
                {
                    id: 9,
                    infoType: "Fax -"
                },
                {
                    id: 10,
                    infoType: "Email -"
                },
                {
                    id: 11,
                    infoType: "Country -"
                },
                {
                    id: 12,
                    infoType: "State -"
                },
                {
                    id: 13,
                    infoType: "District -"
                },
                {
                    id: 14,
                    infoType: "City -"
                }
            ],
            addInfoInventorData: [
                {
                    id: 1,
                    infoInventorType: "Type -"
                },
                {
                    id: 2,
                    infoInventorType: "Gender -"
                },
                {
                    id: 3,
                    infoInventorType: "Name -"
                },
                {
                    id: 4,
                    infoInventorType: "Nationality -"
                },
                {
                    id: 5,
                    infoInventorType: "Address -"
                },
                {
                    id: 6,
                    infoInventorType: "PIN -"
                },
                {
                    id: 7,
                    infoInventorType: "STD -"
                },
                {
                    id: 8,
                    infoInventorType: "Phone -"
                },
                {
                    id: 9,
                    infoInventorType: "Fax -"
                },
                {
                    id: 10,
                    infoInventorType: "Email -"
                },
                {
                    id: 11,
                    infoInventorType: "Country -"
                },
                {
                    id: 12,
                    infoInventorType: "State -"
                },
                {
                    id: 13,
                    infoInventorType: "District -"
                },
                {
                    id: 14,
                    infoInventorType: "City -"
                }
            ],
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
            inventorRequestSelected: false,
            formTypeSelect: [
                {
                    id: 1,
                    type: "Form 8",
                    name: "form_8"
                },
                {
                    id: 2,
                    type: "Form 18 ( Normal )",
                    name: "form_18"

                },
                {
                    id: 3,
                    type: "Form 28",
                    name: "form_28"
                }
            ],
            checkboxValueError: false,
            checkboxValue: false,
            inventorformModalVisible: false,
            applicanformModalVisible: false,
            countryList: [],
            applicantFormError: false,
            resertAllForm: false,
            saveAllForm: false,
            uploadAllForm: false,
            dictionSelected: "",
            dictionSelectedError: false,
            typeSelection: "",
            typeSelectionError: false,
            specificationSelection: "",
            specificationSelectionError: false,
            provisionalPart: "",
            provisionalPartError: false,
            additionalClaim: "",
            additionalClaimError: false,
            claimsPages: "",
            claimsPagesError: false,
            absractPageCount: "",
            absractPageCountError: false,
            drwaingPageCount: "",
            drwaingPageCountError: false,
            drwaingSequenceCount: "",
            drwaingSequenceCountError: false,
            drawingClaimsCount: "",
            drawingClaimsCountError: false,
            drwaPriorityCount: "",
            drwaPriorityCountError: false,
            changeApplicantionType: "",
            changeApplicantionTypeError: false,
            serviceAddress: "",
            serviceAddressError: false,
            stateSelection: "",
            stateSelectionError: false,
            mobileNumberSelect: "",
            mobileNumberSelectError: false,
            telephoneNumberSelect: "",
            telephoneNumberSelectError: false,
            emailSelection: "",
            emailSelectionError: false,
            alternativeEmail: "",
            alternativeEmailError: false,
            abstractChange: "",
            abstractChangeError: false,
            descriptionChnage: "",
            descriptionChnageError: false,
            claimsChange: "",
            claimsChangeError: false,
            responseError: "",
            applicationNumber: "",
            applicationNumberError: false,
            applicantName: "",
            applicantNameError: false,
            applicantAddress: "",
            applicantAddressError: false,
            applicantPincode: "",
            applicantPincodeError: false,
            applicantCity: "",
            applicantCityError: false,
            applicantState: "",
            applicantStateError: false,
            applicantCountry: "",
            applicantCountryError: false,
            headingModal: "",
            openSavedModal: false,
            modalHeader: "",
            openFailedModal: false,
            hasErrorForFields: {},
            inventorNumber: "",
            inventorNumberError: false,
            inventorName: "",
            inventorNameError: false,
            inventorAddress: "",
            inventorAddressError: false,
            inventorPincode: "",
            inventorPincodeError: false,
            inventorCity: "",
            inventorCityError: false,
            inventorState: "",
            inventorStateError: false,
            inventorCountry: "",
            inventorCountryError: false,
            items: [],
            formData: {}
            // Customizable Area End
        };

        // Customizable Area Start
        // Customizable Area End
    }

    // Customizable Area Start
    // Customizable Area Start

    selectJuricDiction = (changeEvent: FormValueData) => {
        this.setState({ dictionSelected: changeEvent.target.value, dictionSelectedError: false });
    };

    selectApplicationType = (applicationEvent: FormValueData) => {
        this.setState({ typeSelection: applicationEvent.target.value, typeSelectionError: false });
    };

    specifictionSelection = (specificationEvent: FormValueData) => {
        this.setState({ specificationSelection: specificationEvent.target.value, specificationSelectionError: false });
    };

    provisionalSlection = (provisionEvent: FormValueData) => {
        this.setState({ provisionalPart: provisionEvent.target.value, provisionalPartError: false });
    };

    claimSelection = (claimEvent: FormValueData) => {
        this.setState({ additionalClaim: claimEvent.target.value, additionalClaimError: false });
    };

    claimDataPageSelection = (claimPageEvent: FormValueData) => {
        this.setState({ claimsPages: claimPageEvent.target.value, claimsPagesError: false });
    };

    abstractCountSelection = (abstractEvent: FormValueData) => {
        this.setState({ absractPageCount: abstractEvent.target.value, absractPageCountError: false });
    };

    pageCountForDraw = (drawGareEvent: FormValueData) => {
        this.setState({ drwaingPageCount: drawGareEvent.target.value, drwaingPageCountError: false });
    };

    claimDrawCount = (claimDrawEvent: FormValueData) => {
        this.setState({ drawingClaimsCount: claimDrawEvent.target.value, drawingClaimsCountError: false });
    };

    sequenceDrwCount = (sequenseEvent: FormValueData) => {
        this.setState({ drwaingSequenceCount: sequenseEvent.target.value, drwaingSequenceCountError: false });
    };

    drawPriorityCount = (drawPrioEvent: FormValueData) => {
        this.setState({ drwaPriorityCount: drawPrioEvent.target.value, drwaPriorityCountError: false });
    };

    onChangeApplicantionType = (appTypeEvent: FormValueData) => {
        this.setState({ changeApplicantionType: appTypeEvent.target.value });
    };

    onSelectAddressService = (serviceEvent: FormValueData) => {
        this.setState({ serviceAddress: serviceEvent.target.value, serviceAddressError: false });
    };

    phoneNumberSelect = (phoneNumber: FormValueData) => {
        this.setState({ mobileNumberSelect: phoneNumber.target.value, mobileNumberSelectError: false });
        const regex = /^[0-9]{10}$/;
        if ((regex.test(phoneNumber.target.value))) {
            this.setState({
                mobileNumberSelect: phoneNumber.target.value, mobileNumberSelectError: false
            });
        } else {
            this.setState({ mobileNumberSelectError: true });
        };
    };

    statesSelection = (stateSelEvent: FormValueData) => {
        this.setState({ stateSelection: stateSelEvent.target.value, stateSelectionError: false });
    };

    onTelephoneSelect = (telephoneNumber: FormValueData) => {
        this.setState({ telephoneNumberSelect: telephoneNumber.target.value, telephoneNumberSelectError: false });
        const telephoneRegex = /^[0-9]{13}$/;
        if ((telephoneRegex.test(telephoneNumber.target.value))) {
            this.setState({
                telephoneNumberSelect: telephoneNumber.target.value, telephoneNumberSelectError: false
            });
        } else {
            this.setState({ telephoneNumberSelectError: true });
        };
    };

    onEmailChange = (emailSelEvent: FormValueData) => {
        this.setState({ emailSelection: emailSelEvent.target.value, emailSelectionError: false });
        let emailRegex = /^[\w\.-]+@[\w\.-]+\.\w+$/;
        if (emailRegex.test(emailSelEvent.target.value)) {
            this.setState({ emailSelection: emailSelEvent.target.value, emailSelectionError: false });
        } else {
            this.setState({ emailSelectionError: true });
        };
    };

    alternativeEmailSelection = (alterEmailEvent: FormValueData) => {
        this.setState({ alternativeEmail: alterEmailEvent.target.value, alternativeEmailError: false });
        let telephoneRegex = /^[\w\.-]+@[\w\.-]+\.\w+$/;
        if (telephoneRegex.test(alterEmailEvent.target.value)) {
            this.setState({ alternativeEmail: alterEmailEvent.target.value, alternativeEmailError: false });
        } else {
            this.setState({ alternativeEmailError: true });
        };
    };

    abstractChange = (abstract: FormValueData) => {
        this.setState({ abstractChange: abstract.target.value, abstractChangeError: false });
    };

    handleDescriptionChange = (description: FormValueData) => {
        this.setState({ descriptionChnage: description.target.value, descriptionChnageError: false });
    };

    handleClaimChange = (claimsSelect: FormValueData) => {
        this.setState({ claimsChange: claimsSelect.target.value, claimsChangeError: false });
    };

    checkFormHandle = (event: CheckData) => {
        const { value, checked } = event.target;
        const { selectedCheckboxes } = this.state;
        if (checked) {
            this.setState({
                selectedCheckboxes: [...selectedCheckboxes, value],
                formCheck: false
            });
        } else {
            this.setState({
                selectedCheckboxes: selectedCheckboxes.filter((checkbox) => checkbox !== value),
                formCheck: false
            });
        };
    };

    submitPersonalInfo = (selected: CheckData) => {
        const { value, checked } = selected.target;
        const { selectedInfo } = this.state;
        if (checked) {
            this.setState({
                selectedInfo: [...selectedInfo, value],
                applicantFormError: false
            });
        } else {
            this.setState({
                selectedInfo: selectedInfo.filter((checkbox) => checkbox !== value),
                applicantFormError: false
            });
        };
    };

    applicantModalShow = () => {
        this.setState({
            applicanformModalVisible: true
        });
    };

    inventorsModalShow = () => {
        this.setState({
            inventorformModalVisible: true
        });
    };

    applicantSelected = () => {
        this.setState({ inventorRequestSelected: !this.state.inventorRequestSelected });
    };

    agreementCheckBox = (event: { target: { checked: boolean } }) => {
        this.setState({ checkboxValue: event.target.checked, checkboxValueError: false });
    };

    resetForm = () => {
        this.setState({
            resertAllForm: true,
            saveAllForm: false,
            uploadAllForm: false,
            dictionSelectedError: false,
            typeSelectionError: false,
            specificationSelectionError: false,
            provisionalPartError: false,
            additionalClaimError: false,
            claimsPagesError: false,
            absractPageCountError: false,
            drwaingPageCountError: false,
            drwaingSequenceCountError: false,
            drawingClaimsCountError: false,
            drwaPriorityCountError: false,
            serviceAddressError: false,
            stateSelectionError: false,
            mobileNumberSelectError: false,
            telephoneNumberSelectError: false,
            emailSelectionError: false,
            alternativeEmailError: false,
            abstractChangeError: false,
            descriptionChnageError: false,
            claimsChangeError: false,
            applicantFormError: false,
            formCheck: false,
            checkboxValueError: false,
            dictionSelected: "",
            typeSelection: "",
            specificationSelection: "",
            provisionalPart: "",
            additionalClaim: "",
            claimsPages: "",
            absractPageCount: "",
            drwaingPageCount: "",
            drwaingSequenceCount: "",
            drawingClaimsCount: "",
            drwaPriorityCount: "",
            serviceAddress: "",
            stateSelection: "",
            mobileNumberSelect: "",
            telephoneNumberSelect: "",
            emailSelection: "",
            alternativeEmail: "",
            abstractChange: "",
            descriptionChnage: "",
            claimsChange: "",
            selectedCheckboxes: [],
            selectedInfo: [],
            checkboxValue: false
        });

        if (this.state.selectedInfo.length > 0) {
            this.setState({ selectedInfo: [] })
        };

        if (this.state.selectedCheckboxes.length > 0) {
            this.setState({ selectedCheckboxes: [] })
        }
    };

    saveForm = () => {
        this.setState({
            resertAllForm: false,
            saveAllForm: true,
            uploadAllForm: false
        });
    };

    handleModalClose = () => {
        this.setState({
            applicanformModalVisible: false
        });
    };

    inventorsModalClose = () => {
        this.setState({
            inventorformModalVisible: false
        });
    };

    handleChangeApplicationNumber = (data: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            applicationNumber: data.target.value
        });
    };

    handleChangeApplicantName = (data: React.ChangeEvent<HTMLInputElement>) => {
        let { value } = data.target;
        const regax = /^[a-zA-Z\s]*$/;
        if (data.target.value === "" || regax.test(value)) {
            this.setState({
                applicantName: value,
                applicantNameError: false
            });
        } else {
            this.setState({
                applicantName: value,
                applicantNameError: true
            });
        }
    };

    handleChangeAddress = (data: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            applicantAddress: data.target.value,
            applicantAddressError: false
        });
    };

    handleChangePincode = (data: React.ChangeEvent<HTMLInputElement>) => {
        let { value } = data.target;
        const regax = /^[1-9][0-9]{5}$/;
        if (value === "" || regax.test(value)) {
            this.setState({
                applicantPincode: value,
                applicantPincodeError: false
            });
        } else {
            this.setState({
                applicantPincode: value,
                applicantPincodeError: true
            });
        }
    };

    handleChangeCity = (data: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            applicantCity: data.target.value,
            applicantCityError: false
        });
    };

    handleChangeState = (data: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            applicantState: data.target.value,
            applicantStateError: this.state.applicantPincodeError
        });
    };

    handleChangeCountry = (data: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            applicantCountry: data.target.value,
            applicantCountryError: this.state.applicantPincodeError
        });
    };

    handleFailedModalClose = () => {
        this.setState({
            openFailedModal: false
        });
    };

    handleSubmitApplicationModal = (changeModalEvent: React.FormEvent<HTMLFormElement>) => {
        changeModalEvent.preventDefault();
        const requiredFields: (keyof MyState)[] = [
            "applicationNumber",
            "applicantName",
            "applicantAddress",
            "applicantPincode",
            "applicantCity",
            "applicantState",
            "applicantCountry"
        ];
        let hasErrors = false;
        const errorState: ErrorState = {
            applicationNumberError: false,
            applicantNameError: false,
            applicantAddressError: false,
            applicantPincodeError: false,
            applicantCityError: false,
            applicantStateError: false,
            applicantCountryError: false
        };
        requiredFields.forEach((field) => {
            if (this.state[field] === "") {
                (errorState as unknown as { [keyValue: string]: boolean })[`${field}Error`] = true;
                hasErrors = true;
            };
        });
        if (hasErrors) {
            this.setState(errorState);
        } else {
            const {
                items,
                applicationNumber,
                applicantName,
                applicantAddress,
                applicantPincode,
                applicantCity,
                applicantState,
                applicantCountry
            }: any = this.state;
            const addInfoDataArray: AddInfoData[] = [];
            // this.setState({
            //     applicanformModalVisible: false,
            //     applicationNumber: "",
            //     applicantName: "",
            //     applicantAddress: "",
            //     applicantPincode: "",
            //     applicantCity: "",
            //     applicantState: "",
            //     applicantCountry: ""
            // });
            if (applicationNumber !== "" || applicantName !== "" || applicantAddress !== "" || applicantPincode !== "" || applicantCity !== "" || applicantState !== "" || applicantCountry !== "")
                this.setState({
                    items: [
                        ...items,
                        applicationNumber,
                        applicantName,
                        applicantAddress,
                        applicantPincode,
                        applicantCity,
                        applicantState,
                        applicantCountry],
                    applicationNumber: '',
                    applicantName: "",
                    applicantAddress: "",
                    applicantPincode: "",
                    applicantCity: "",
                    applicantState: "",
                    applicantCountry: ""
                }, () => {
                    console.log("@@@@ =========>>>>", items)
                    this.setState({ applicanformModalVisible: false })
                });
        };
    };

    handleInventorNumberChange = (data: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inventorNumber: data.target.value
        });
    };

    handleChangeInventorName = (data: React.ChangeEvent<HTMLInputElement>) => {
        let { value } = data.target;
        const regax = /^[a-zA-Z\s]*$/;
        if (data.target.value === "" || regax.test(value)) {
            this.setState({
                inventorName: value,
                inventorNameError: false
            });
        } else {
            this.setState({
                inventorName: value,
                inventorNameError: true
            });
        }
    };

    handleInventorAddress = (data: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inventorAddress: data.target.value,
            inventorAddressError: false
        });
    };

    handleInventorPincode = (data: React.ChangeEvent<HTMLInputElement>) => {
        let { value } = data.target;
        const regax = /^[1-9][0-9]{5}$/;
        if (value === "" || regax.test(value)) {
            this.setState({
                inventorPincode: value,
                inventorPincodeError: false
            });
        } else {
            this.setState({
                inventorPincode: value,
                inventorPincodeError: true
            });
        }
    };

    handleInventorCity = (data: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inventorCity: data.target.value,
            inventorCityError: false
        });
    };

    handleInventorState = (data: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inventorState: data.target.value,
            inventorStateError: this.state.applicantPincodeError
        });
    };

    handleInventorCountry = (data: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inventorCountry: data.target.value,
            inventorCountryError: this.state.applicantPincodeError
        });
    };

    handleSubmitInventorModal = (changeModalEvent: React.FormEvent<HTMLFormElement>) => {
        changeModalEvent.preventDefault();
        const requiredFields: (keyof InventorModalState)[] = [
            "inventorNumber",
            "inventorName",
            "inventorAddress",
            "inventorPincode",
            "inventorCity",
            "inventorState",
            "inventorCountry"
        ];
        let invetorError = false;
        const inventorErrorState: InventorErrorState = {
            inventorNumberError: false,
            inventorNameError: false,
            inventorAddressError: false,
            inventorPincodeError: false,
            inventorCityError: false,
            inventorStateError: false,
            inventorCountryError: false
        };

        requiredFields.forEach((field) => {
            if (this.state[field] === "") {
                (inventorErrorState as unknown as { [keyValue: string]: boolean })[`${field}Error`] = true;
                invetorError = true;
            }
        });

        if (invetorError) {
            this.setState(inventorErrorState);
        } else {
            this.setState({
                inventorformModalVisible: false,
                inventorNumber: "",
                inventorName: "",
                inventorAddress: "",
                inventorPincode: "",
                inventorCity: "",
                inventorState: "",
                inventorCountry: ""
            });
        };
    };

    formSubmit = (submitEvent: React.FormEvent<HTMLFormElement>) => {
        submitEvent.preventDefault();

        const requiredFields: (keyof FormSubmit)[] = [
            "dictionSelected",
            "typeSelection",
            "specificationSelection",
            "provisionalPart",
            "additionalClaim",
            "claimsPages",
            "absractPageCount",
            "drwaingPageCount",
            "drwaingSequenceCount",
            "drawingClaimsCount",
            "drwaPriorityCount",
            "serviceAddress",
            "stateSelection",
            "mobileNumberSelect",
            "telephoneNumberSelect",
            "emailSelection",
            "alternativeEmail",
            "abstractChange",
            "descriptionChnage",
            "claimsChange",
        ];

        const errorState = requiredFields.reduce((validation: FormErrorState, field) => {
            if (this.state[field] === "") {
                validation[`${field}Error`] = true;
            }
            return validation;
        }, {});

        if (this.state.selectedInfo.length === 0) {
            errorState.applicantFormError = true;
        };

        if (this.state.selectedCheckboxes.length === 0) {
            errorState.formCheck = true;
        }

        if (!this.state.checkboxValue) {
            errorState.checkboxValueError = true;
        }

        if (Object.values(errorState).some((error) => error)) {
            this.setState((prevState) => ({
                ...prevState,
                ...errorState,
                uploadAllForm: true,
                resertAllForm: false,
                saveAllForm: false
            }));
        }
    };

    onApplicantModalHandle = (applicantChange: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value }: any = applicantChange.target;
        const fieldValue = value;
        this.setState((prevState) => ({
            formData: { ...prevState.formData, [name]: fieldValue },
        }), () => {
            console.log('Updated State:', this.state.formData);
            this.setState({
                applicationNumberError: false,
                applicantNameError: false,
                applicantAddressError: false,
                applicantPincodeError: false,
                applicantCityError: false,
                applicantStateError: false,
                applicantCountryError: false
            })
        });
    }
    // Customizable Area End

}
