import { ChangeEvent, Component } from "react";
import { data } from "./Data/Data"
import React from "react";

// Customizable Area Start

interface ApplicantModalDataType {
    [key: string]: string
}

export interface ValidResponseType {
    data: object;
}

interface FieldErrors {
    [fieldName: string]: boolean;
}

export interface Any {
    id: string;
    type: string;
    attributes: {
        field_name: string;
        field_type: string | File | Date;
        field_value: null;
        required: boolean;
        form_values: Array<FormValueDataObject>
    }
}

export interface FormValueDataObject {
    value: string;
    id: string;
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

export interface Main {
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
    responseError: string;
    apiSuccessResponse: Array<object>;
    formIds: number;
    fieldType: string;
    dictionSelected: string;
    dictionSelectedError: boolean;
    typeSelection: string;
    typeSelectionError: boolean;
    specificationSelection: string;
    specificationSelectionError: boolean;
    provisionalPart: string;
    provisionalPartError: boolean;
    applicanformModalVisible: boolean;
    sortedFormSection: Array<object>;
    formFilteredData: Array<object>;
    formModalFilterData: Array<object>;
    floatValue: string;
    floatValueError: boolean;
    selectedChecbox: Array<string>;
    formCheck: boolean;
    formData: {};
    resertAllForm: boolean;
    saveAllForm: boolean;
    uploadAllForm: boolean;
    applicantData: Array<ApplicantModalDataType>;
    applicantDataArray: Array<object>;
    fieldValueIndex: number;
    mainFieldIndex: number;
    fieldErrors: object;
    editIndex: number;
    saveInitialModalData: Array<object>;
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

export default class MultipageFormsController extends Component<
    Props,
    StateType,
    SSType
> {
    // Customizable Area Start
    submitTransactionApiCallId: string = "";
    getOrderApiCallId: string = "";
    getFormFillingApiCallId: string = "";
    editorRef: React.RefObject<unknown>
    // Customizable Area End

    constructor(props: Props) {
        super(props);
        // Customizable Area Start

        this.state = {
            // Customizable Area Start
            responseError: "",
            apiSuccessResponse: [],
            formIds: 0,
            fieldType: "",
            dictionSelected: "",
            dictionSelectedError: false,
            typeSelection: "",
            typeSelectionError: false,
            specificationSelection: "",
            specificationSelectionError: false,
            provisionalPart: "",
            provisionalPartError: false,
            applicanformModalVisible: false,
            sortedFormSection: [],
            formFilteredData: [],
            formModalFilterData: [],
            floatValue: "",
            floatValueError: false,
            selectedChecbox: [],
            formCheck: false,
            formData: {},
            resertAllForm: false,
            saveAllForm: false,
            uploadAllForm: false,
            applicantData: [],
            applicantDataArray: [],
            fieldValueIndex: 0,
            mainFieldIndex: 0,
            fieldErrors: {},
            editIndex: NaN,
            saveInitialModalData: []
            // Customizable Area End
        };

        // Customizable Area Start
        this.editorRef = React.createRef();
        // Customizable Area End
    }

    // Customizable Area Start

    async componentDidMount() {
        this.apiDataSorting();
        const transformedData = this.transformFormData();
    };

    apiDataSorting = () => {
        let formCreationId = data.map((form: any) => form.id);
        this.setState({ formIds: formCreationId[0] });

        let formsection = data.map((item: any) => item.attributes.form_sections.data);
        console.log(formsection, "jdfhbvhjdvbdhvbdjhvdbvh")
        let sortFormSection: any = formsection[0].sort((itemPosition1: any, itemPosition2: any) => itemPosition1.attributes.position - itemPosition2.attributes.position);
        let isMultipleFormTrue = sortFormSection.filter((item: { attributes: { multiple: boolean } }) => item?.attributes?.multiple === true);
        let isMultipleFormFalse = sortFormSection.filter((item: { attributes: { multiple: boolean } }) => item?.attributes?.multiple === false);
        console.log(isMultipleFormFalse, "djfhbvjdhfbvjdfvbdjvh")
        let isMultiFormFalseValidation = isMultipleFormFalse?.map((item: any) => {
            item.attributes.form_fields.data.forEach((innerItem: any) => {
                innerItem.attributes["isValid"] = false;
            });
            return item
        });
        let isMultiFormTrueValidation = isMultipleFormTrue.map((item: any) => {
            item.attributes.form_fields.data.forEach((innerAppModalItem: any) => {
                innerAppModalItem.attributes["isValid"] = false;
            });
            return item
        });
        this.setState({ sortedFormSection: isMultiFormFalseValidation, formFilteredData: isMultiFormTrueValidation }, () => {
            console.log(this.state.sortedFormSection, "--===0--===-=-===")
        });

    }

    transformFormData = () => {
        const formSectionsAttributes = data.map((form) => {
            const formFieldsAttributes = form.attributes.form_sections.data.map((section) => {
                return {
                    name: section.attributes.name,
                    position: section.attributes.position,
                    form_fields_attributes: section.attributes.form_fields.data.map((field) => ({
                        position: field.attributes.position,
                        field_name: field.attributes.field_name,
                        field_type: field.attributes.field_type,
                        field_value: field.attributes.field_value,
                        required: field.attributes.required
                    })),
                };
            });

            return formFieldsAttributes.flat();
        });

        return {
            form_submission: {
                form_sections_attributes: formSectionsAttributes.flat(),
            },
        };
    };

    handleModalClose = () => {
        let localData: any = localStorage.getItem("modalCurrentData");
        let modal = JSON.parse(localData);
        let data = this.state.sortedFormSection;
        let changeIndex = this.state.editIndex;

        if (changeIndex) {
            data[changeIndex] = modal[0];
        }

        this.setState({
            formFilteredData: modal
        }, () => {
            this.setState({
                applicanformModalVisible: false,
                sortedFormSection: data
            })
            localStorage.removeItem("modalCurrentData");
        });
    };

    applicantModalShow = () => {
        let currentModalData = this.state.formFilteredData;
        this.setState({
            applicanformModalVisible: true,
        }, () => {
            let modal = JSON.stringify(currentModalData);
            localStorage.setItem("modalCurrentData", modal);
        });
    };

    handleEdit = (item: any, index: any) => {
        this.setState({
            applicanformModalVisible: true
        }, () => {
            let data = [item];
            let modal = JSON.stringify(data);
            localStorage.setItem("modalCurrentData", modal);
            this.setState({ formFilteredData: data, editIndex: index });
        });
    }

    handleSaveEditModalData = () => {
        let data = this.state.sortedFormSection;
        let changeObject = this.state.formFilteredData;
        let changeIndex = this.state.editIndex;
        data[changeIndex] = changeObject[0];
        this.setState({ sortedFormSection: data }, () => {
            this.setState({ applicanformModalVisible: false });
        })
    }

    handleDelete = (index: any) => {
        let data = this.state.sortedFormSection;
        data.splice(index, 1);
        this.setState({ sortedFormSection: data }, () => {
            this.setState({ applicanformModalVisible: false });
        })
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>, mainIndex: number, fieldIndex: number) => {
        const { value } = event.target;
        let currentData: any = this.state.sortedFormSection;

        let mainIndexData: any = currentData[mainIndex];

        if (mainIndexData && mainIndexData.attributes.form_fields.data[fieldIndex]) {
            let indexData: any = mainIndexData.attributes.form_fields.data[fieldIndex].attributes;
            indexData["field_value"] = value;
            indexData["isValid"] = false;
            this.handleMobileNumber(indexData, value);
            this.validateField(indexData, value);
            this.setState({ sortedFormSection: currentData });
        }
    };

    validateField = (indexData: any, value: string) => {
        let pincodeRegex = /^[1-9][0-9]{5}$/.test(value);
        if (indexData.field_type === 'pincode') {
            indexData["isValid"] = !pincodeRegex;
        };
    }

    handleMobileNumber = (indexData: any, value: string) => {
        let isValidMobileNumber = /^[0-9]{10}$/.test(value);
        let isValidTelephoneNumber = /^[0-9]{13}$/.test(value);
        if (indexData.field_type === "mobile_number") {
            indexData["isValid"] = !isValidMobileNumber;
        } else if (indexData.field_type === "telephone_number") {
            indexData["isValid"] = !isValidTelephoneNumber;
        }
    }

    handleCheckBoxChange = (inputField: { target: { value: string } }, mainIndex: number, fieldIndex: number) => {
        const { value } = inputField.target;

        let currentData = this.state.sortedFormSection;
        let mainIndexData: any = currentData[mainIndex];
        let indexData: any = mainIndexData?.attributes.form_fields.data[fieldIndex].attributes;
        indexData["field_value"] = value;
        this.setState({ sortedFormSection: currentData });
    };

    handleModalSubmit = () => {
        let isMultipleFormtrue = this.state.formFilteredData;

        let isMultiFormModalValidation = isMultipleFormtrue.map((item: any) => {
            item.attributes.form_fields.data.forEach((innerModalItem: any) => {
                if (innerModalItem.attributes.required === true && innerModalItem.attributes.field_value === null || "") {
                    innerModalItem.attributes["isValid"] = true;
                }
            });
            return item
        });
        this.setState({ formFilteredData: isMultiFormModalValidation });

        let allFieldsFilled = true;

        isMultipleFormtrue.forEach((item: any) => {
            item.attributes.form_fields.data.forEach((innerModalItem: any) => {
                if (innerModalItem.attributes.required === true && (innerModalItem.attributes.field_value === null || innerModalItem.attributes.field_value === "")) {
                    innerModalItem.attributes["isValid"] = true;
                    allFieldsFilled = false;
                }
            });
        });

        if (allFieldsFilled) {
            let sortedFormModal = this.state.sortedFormSection;
            let modalData = [...sortedFormModal, ...isMultiFormModalValidation];
            this.setState({ sortedFormSection: modalData }, () => {
                this.setState({ applicanformModalVisible: false });
            });
        }
    }

    handleSubmit = async (formValues: React.FormEvent<HTMLFormElement>) => {
        formValues.preventDefault();

        let isMultipleFormFalse = this.state.sortedFormSection;

        let isMultiFormFalseValidation = isMultipleFormFalse.map((item: any) => {
            item.attributes.form_fields.data.forEach((innerItem: any) => {
                if (innerItem.attributes.required && innerItem.attributes.field_value == null || "") {
                    innerItem.attributes["isValid"] = true;
                }
            });
            return item
        });
        this.setState({ sortedFormSection: isMultiFormFalseValidation });

    }


    handleModalChange = (event: React.ChangeEvent<HTMLInputElement>, mainIndex: number, fieldIndex: number) => {
        const value = event?.target.value;
        let currentModalData: any = this.state.formFilteredData;
        let mainIndexModalData: any = currentModalData[mainIndex];

        if (mainIndexModalData && mainIndexModalData.attributes.form_fields.data[fieldIndex]) {
            let indexData: any = mainIndexModalData.attributes.form_fields.data[fieldIndex].attributes;
            indexData["field_value"] = value;
            indexData["isValid"] = false;
            this.handleMobileNumber(indexData, value);
            this.validateField(indexData, value);
            this.setState({ formFilteredData: currentModalData });
        }
    };

    // Customizable Area End

}
