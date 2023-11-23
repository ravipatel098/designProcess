import { Box, Button, Checkbox, Fade, FormControlLabel, MenuItem, Modal, Radio, RadioGroup, TextField, Typography, styled } from '@material-ui/core';
import React, { Component } from 'react'
import { configJSON } from './config';
import ApiDataController from "./ApiDataController.web";

export default class ApiData extends ApiDataController {


    renderApplicantFormModal = () => {
        return (
            <Modal
                open={this.state.applicanformModalVisible}
                onClose={this.handleModalClose}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500
                }}
                style={webStyle.modalContainer}
            >
                <Fade in={this.state.applicanformModalVisible}>
                    <Box sx={webStyle.paper} style={{ background: "#ffffff" }}>
                        <form>
                            <Box>
                                {this.state.formFilteredData.map((modalFieldItem: any, mainIndex: number) => {
                                    return (
                                        <Box key={mainIndex}>
                                            <Typography style={webStyle.modalHeading} data-testid="formSectionModalTextId">{modalFieldItem.attributes.name}</Typography>
                                            <NoteMessageText>{modalFieldItem.attributes.note}</NoteMessageText>
                                            {modalFieldItem.attributes.form_fields.data.map((fieldValueItem: any, index: number) => {
                                                return (
                                                    <Box key={index} sx={webStyle.pageFirstInput}>
                                                        <Box style={{
                                                            display: "flex",
                                                            flexDirection: "row",
                                                            margin: "3px 0px 6px 0px",
                                                            alignItems: "center"
                                                        }}>
                                                            <FormFieldName>
                                                                {fieldValueItem.attributes.field_name}
                                                            </FormFieldName>
                                                            <Typography style={webStyle.astrix}>{configJSON.astrick}</Typography>
                                                        </Box>
                                                        {this.renderFormField(fieldValueItem, configJSON, mainIndex, index)}
                                                    </Box>
                                                )
                                            })}
                                        </Box>
                                    )
                                })}
                                <Box sx={webStyle.modalInputButton}>
                                    <PrioriteAddCancelButton variant="outlined"
                                        data-testid="cancelButtonTestId"
                                        onClick={this.handleModalClose}
                                    >
                                        {configJSON.cancelButtonText}
                                    </PrioriteAddCancelButton>
                                    <PrioriteAddCancelButton
                                        variant="outlined"
                                        data-testid="modalSubmitHandleTestId"
                                        onClick={this.state.editIndex ? this.handleSaveEditModalData : this.handleModalSubmit}
                                    >
                                        {configJSON.addButtonText}
                                    </PrioriteAddCancelButton>
                                </Box>
                            </Box>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        );
    }

    renderFormField = (fieldValueItem: any, configJSON: { requiredFeildError: string }, mainIndex: number, index: number) => {
        let isValid = fieldValueItem.attributes.isValid;
        let helperText = isValid && `${fieldValueItem.attributes.field_name} ${configJSON.requiredFeildError}`;
        const fieldTypes: any = {
            text: (
                <TextAreaFields
                    multiline={true}
                    minRows={1}
                    maxRows={5}
                    fullWidth
                    type="text"
                    data-testid="applicantModalTextSelectTestId"
                    id="outlined-select-currency-native"
                    error={isValid}
                    helperText={helperText}
                    variant="outlined"
                    value={fieldValueItem?.attributes?.field_value}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleModalChange(event, mainIndex, index)}
                />
            ),
            string: (
                <TextField
                    fullWidth
                    type="text"
                    data-testid="applicantStringTestId"
                    id="outlined-select-currency-native"
                    error={isValid}
                    helperText={helperText}
                    variant="outlined"
                    value={fieldValueItem?.attributes?.field_value}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleModalChange(event, mainIndex, index)}
                />
            ),
            dropdown: (
                <TextField
                    fullWidth
                    select
                    id="outlined-select-currency-native"
                    data-testid="applicantDropDownTestId"
                    error={isValid}
                    helperText={helperText}
                    variant="outlined"
                    value={fieldValueItem?.attributes?.field_value}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleModalChange(event, mainIndex, index)}
                >
                    {fieldValueItem.attributes.form_values.map((option: { value: string }, index: number) => (
                        <MenuItem key={index} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
            ),
            time: (
                <TextField
                    id="time"
                    type="time"
                    defaultValue="07:30"
                    InputLabelProps={{
                        shrink: true
                    }}
                    data-testid="applicantTimeSelectTestId"
                    inputProps={{
                        step: 300
                    }}
                    error={isValid}
                    helperText={helperText}
                    value={fieldValueItem?.attributes?.field_value}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleModalChange(event, mainIndex, index)}
                />
            ),
            number: (
                <NumberField
                    style={{ width: "30inch" }}
                    id="number"
                    type="number"
                    data-testid="applicantNumberTestId"
                    InputProps={{
                        inputProps: {
                            max: 500,
                            min: 1
                        }
                    }}
                    error={isValid}
                    helperText={helperText}
                    variant="outlined"
                    value={fieldValueItem?.attributes?.field_value}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleModalChange(event, mainIndex, index)}
                />
            ),
            float: (
                <NumberField
                    id="number"
                    type="number"
                    InputProps={{
                        inputProps: {
                            max: 500,
                            min: 1
                        }
                    }}
                    data-testid="applicantFloatTestId"
                    error={isValid}
                    helperText={helperText}
                    variant="outlined"
                    value={fieldValueItem?.attributes?.field_value}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleModalChange(event, mainIndex, index)}
                />
            ),
            email: (
                <TextAreaFields
                    fullWidth
                    type="email"
                    data-testid="applicantEmailTestId"
                    id="outlined-select-currency-native"
                    error={isValid}
                    helperText={helperText}
                    variant="outlined"
                    value={fieldValueItem?.attributes?.field_value}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleModalChange(event, mainIndex, index)}
                />
            ),
            mobile_number: (
                <TextAreaFields
                    fullWidth
                    type="number"
                    data-testid="mobileNumberSelectTestId"
                    id="outlined-select-currency-native"
                    error={isValid}
                    helperText={helperText}
                    variant="outlined"
                    value={fieldValueItem?.attributes?.field_value}
                    InputProps={{
                        inputProps: {
                            style: { WebkitAppearance: 'textfield', margin: "0px" },
                        }
                    }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleModalChange(event, mainIndex, index)}
                />
            ),
            checkbox: (
                <FormControlInput
                    key={index}
                    data-testid="applicantFormControlTestId"
                    control={
                        <Checkbox
                            data-testid="applicantsInfoDeclareCheckBoxTestId"
                            disableRipple
                            color="default"
                            checkedIcon={
                                <OuterIcon>
                                    <CheckedIcon></CheckedIcon>
                                </OuterIcon>
                            }
                            icon={<OuterIcon></OuterIcon>}
                            inputProps={{ "aria-label": "decorative checkbox" }}
                            value={fieldValueItem?.attributes?.field_value}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleModalChange(event, mainIndex, index)}
                        />
                    }
                    label={undefined}
                />
            ),
            boolean: (
                <FormControlInput
                    key={index}
                    data-testid="applicantsBooleanCheckBoxTestId"
                    control={
                        <Checkbox
                            data-testid="applicantsInfoDeclareCheckBoxTestId"
                            disableRipple
                            color="default"
                            checkedIcon={
                                <OuterIcon>
                                    <CheckedIcon></CheckedIcon>
                                </OuterIcon>
                            }
                            icon={<OuterIcon></OuterIcon>}
                            inputProps={{ "aria-label": "decorative checkbox" }}
                            value={fieldValueItem?.attributes?.field_value}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleModalChange(event, mainIndex, index)}
                        />
                    }
                    label={undefined}
                />
            ),
            radio: (
                <RadioGroup
                    row aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group">
                    {fieldValueItem.attributes.form_values.map((radioItem: { value: string }, index: number) => (
                        <FormControlLabel
                            key={index}
                            data-testid="applicantsRadioLabelCheckTestId"
                            value={radioItem.value}
                            control={
                                <Radio
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleModalChange(event, mainIndex, index)}
                                />
                            }
                            label={radioItem.value}
                        />
                    ))}
                </RadioGroup>
            ),
            date: (
                <TextField
                    fullWidth
                    id="date"
                    type="date"
                    data-testid="applicantDateSelectTestId"
                    error={isValid}
                    helperText={helperText}
                    variant="outlined"
                    value={fieldValueItem?.attributes?.field_value}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleModalChange(event, mainIndex, index)}
                />
            ),
            file: (
                <TextField
                    fullWidth
                    id="file"
                    type="file"
                    data-testid="applicantFileTestId"
                    error={isValid}
                    helperText={helperText}
                    variant="outlined"
                    inputProps={{ multiple: true, accept: ".pdf, .doc, .docx, .jpg, .jpeg, .png, .mp4" }}
                    value={fieldValueItem?.attributes?.field_value}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleModalChange(event, mainIndex, index)}
                />
            ),
        };

        return fieldTypes[fieldValueItem.attributes.field_type] || null;
    };

    renderAddPrioritiesButton = (formSectionName: string) => {
        return (
            <Box sx={webStyle.prioritiesAddButton}>
                <ApplicantPrioritiesText
                    data-testid="formSectionNameTextId">
                    {formSectionName}
                </ApplicantPrioritiesText>
                <PriotiesButton>{configJSON.addPriorityButtonText}</PriotiesButton>
                <Box sx={{ width: "300px" }}></Box>
            </Box>
        );
    }

    renderFormSectionName = (formSectionName: string) => {
        return (
            <Box sx={webStyle.noOfDraw}>
                <FormSectionName data-testid="formSectionNameTextId">{formSectionName}</FormSectionName>
            </Box>
        );
    }

    renderApplicantButton = () => {
        return (
            <Box sx={webStyle.prioritiesAddButtonApplicant}>
                <ApplicantPrioritiesText>{configJSON.applicantsHeading}</ApplicantPrioritiesText>
                <PriotiesButton
                    data-testid="applicantModalButtonTestId"
                    onClick={this.applicantModalShow}
                >{configJSON.addApplicantsButtonText}</PriotiesButton>
                <Box sx={{ width: "300px" }}></Box>
            </Box>
        );
    }

    renderAllFunction = (fielItemValue: any, configJSON: { requiredFeildError: string }, mainIndex: number, index: number) => {
        let isValid = fielItemValue.attributes.isValid;
        let helperTextForm = isValid && configJSON.requiredFeildError;
        let fieldTypeFactories: any = {
            text: (
                <TextAreaFields
                    fullWidth
                    type="text"
                    multiline={true}
                    minRows={1}
                    maxRows={5}
                    data-testid="applicationTypeSelectTestId"
                    id="outlined-select-currency-native"
                    variant="outlined"
                    name={fielItemValue.attributes.field_name}
                    onChange={(inputField: React.ChangeEvent<HTMLInputElement>) => this.handleChange(inputField, mainIndex, index)}
                    error={isValid}
                    helperText={helperTextForm}
                />
            ),
            string: (
                <TextField
                    fullWidth
                    type="text"
                    data-testid="stringTypeSelectTestId"
                    id="outlined-select-currency-native"
                    variant="outlined"
                    name={fielItemValue.attributes.field_name}
                    onChange={(inputField: React.ChangeEvent<HTMLInputElement>) => this.handleChange(inputField, mainIndex, index)}
                    error={isValid}
                    helperText={helperTextForm}
                />
            ),
            boolean: (
                <FormControlInput
                    data-testid="booleanFormControlTestId"
                    control={
                        <Checkbox
                            data-testid="applicantsInfoDeclareCheckBoxTestId"
                            disableRipple
                            color="default"
                            name={fielItemValue.attributes.field_name}
                            checkedIcon={
                                <OuterIcon>
                                    <CheckedIcon></CheckedIcon>
                                </OuterIcon>
                            }
                            icon={<OuterIcon></OuterIcon>}
                            inputProps={{ "aria-label": "decorative checkbox" }}
                            onChange={() => this.handleCheckBoxChange({ target: { value: fielItemValue.attributes.field_name } }, mainIndex, index)}
                        />
                    }
                    label={undefined}
                />
            ),
            dropdown: (
                <TextField
                    fullWidth
                    select
                    data-testid="dropDownTypeSelectTestId"
                    id="outlined-select-currency-native"
                    variant="outlined"
                    name={fielItemValue.attributes.field_name}
                    error={isValid}
                    helperText={helperTextForm}
                    onChange={(inputField: React.ChangeEvent<HTMLInputElement>) => this.handleChange(inputField, mainIndex, index)}
                >
                    {fielItemValue.attributes.form_values.map((option: any, index: number) => (
                        <MenuItem key={index} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
            ),
            time: (
                <TextField
                    id="time"
                    type="time"
                    data-testid="timeSelectTestId"
                    defaultValue="07:30"
                    InputLabelProps={{
                        shrink: true
                    }}
                    inputProps={{
                        step: 300
                    }}
                    name={fielItemValue.attributes.field_name}
                    helperText={helperTextForm}
                    onChange={(inputField: React.ChangeEvent<HTMLInputElement>) => this.handleChange(inputField, mainIndex, index)}
                />
            ),
            number: (
                <NumberField
                    data-testid="noOfPagesTextId"
                    style={{ width: "30inch" }}
                    id="number"
                    type="number"
                    variant="outlined"
                    InputProps={{
                        inputProps: {

                        }
                    }}
                    error={isValid}
                    helperText={helperTextForm}
                    name={fielItemValue.attributes.field_name}
                    onChange={(inputField: React.ChangeEvent<HTMLInputElement>) => this.handleChange(inputField, mainIndex, index)}
                />
            ),
            pincode: (
                <NumberField
                    data-testid="noOfPagesTextId"
                    style={{ width: "30inch" }}
                    id="number"
                    type="number"
                    variant="outlined"
                    InputProps={{
                        inputProps: {

                        }
                    }}
                    error={isValid}
                    helperText={helperTextForm}
                    name={fielItemValue.attributes.field_name}
                    onChange={(inputField: React.ChangeEvent<HTMLInputElement>) => this.handleChange(inputField, mainIndex, index)}
                />
            ),
            float: (
                <NumberField
                    id="number"
                    type="number"
                    data-testid="minMaxNumberSelectTestId"
                    InputProps={{
                        inputProps: {
                            max: 500,
                            min: 1
                        }
                    }}
                    variant="outlined"
                    error={isValid}
                    helperText={helperTextForm}
                    name={fielItemValue.attributes.field_name}
                    onChange={(inputField: React.ChangeEvent<HTMLInputElement>) => this.handleChange(inputField, mainIndex, index)}
                />
            ),
            checkbox: (
                <FormControlInput
                    key={index}
                    data-testid="applicantCheckBocControlTestId"
                    control={
                        <Checkbox
                            data-testid="applicantsInfoDeclareCheckBoxTestId"
                            disableRipple
                            color="default"
                            name={fielItemValue.attributes.field_name}
                            onChange={() => this.handleCheckBoxChange({ target: { value: fielItemValue.attributes.field_name } }, mainIndex, index)}
                            checkedIcon={
                                <OuterIcon>
                                    <CheckedIcon></CheckedIcon>
                                </OuterIcon>
                            }
                            icon={<OuterIcon></OuterIcon>}
                            inputProps={{ "aria-label": "decorative checkbox" }}
                        />
                    }
                    label={fielItemValue.attributes.field_name}
                />
            ),
            radio: (
                <RadioGroup
                    data-testid="formControlRadioButtonTestId"
                    row
                    key={index}
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={(inputField: React.ChangeEvent<HTMLInputElement>) => this.handleChange(inputField, mainIndex, index)}
                >
                    {fielItemValue.attributes.form_values.map((radioItem: any, idx: any) => (
                        <FormControlLabel
                            key={idx}
                            data-testid="formControlRadioButtonTestId"
                            value={radioItem.value}
                            name={fielItemValue.attributes.field_name}
                            control={
                                <Radio />
                            }
                            label={radioItem.value}
                        />
                    ))}
                </RadioGroup>
            ),
            date: (
                <NumberField
                    key={index}
                    id="date"
                    type="date"
                    variant="outlined"
                    data-testid="dateSelectTestId"
                    error={isValid}
                    helperText={helperTextForm}
                    name={fielItemValue.attributes.field_name}
                    onChange={(inputField: React.ChangeEvent<HTMLInputElement>) => this.handleChange(inputField, mainIndex, index)}
                />
            ),
            file: (
                <TextField
                    key={index}
                    id="file"
                    type="file"
                    data-testid="fileShareSelectTestId"
                    variant="outlined"
                    error={isValid}
                    helperText={helperTextForm}
                    name={fielItemValue.attributes.field_name}
                    inputProps={{ multiple: true, accept: ".pdf, .doc, .docx, .jpg, .jpeg, .png, .mp4" }}
                    onChange={(inputField: React.ChangeEvent<HTMLInputElement>) => this.handleChange(inputField, mainIndex, index)}
                />
            ),
            email: (
                <TextAreaFields
                    fullWidth
                    type="email"
                    data-testid="applicationEmailTestId"
                    id="outlined-select-currency-native"
                    error={isValid}
                    helperText={helperTextForm}
                    name={fielItemValue.attributes.field_name}
                    variant="outlined"
                    onChange={(inputField: React.ChangeEvent<HTMLInputElement>) => this.handleChange(inputField, mainIndex, index)}
                />
            ),
            mobile_number: (
                <TextAreaFields
                    fullWidth
                    type="number"
                    data-testid="mobileNumberTypeSelectTestId"
                    id="outlined-select-currency-native"
                    error={isValid}
                    helperText={helperTextForm}
                    name={fielItemValue.attributes.field_name}
                    variant="outlined"
                    InputProps={{
                        inputProps: {
                            style: { WebkitAppearance: 'textfield', margin: "0px" },
                            appearance: 'none',
                            inputMode: "numeric",
                            message: "mobile number should be 10 digit"
                        }
                    }}
                    onChange={(inputField: React.ChangeEvent<HTMLInputElement>) => this.handleChange(inputField, mainIndex, index)}
                />
            ),
            telephone_number: (
                <TextAreaFields
                    fullWidth
                    type="number"
                    data-testid="mobileNumberTypeSelectTestId"
                    id="outlined-select-currency-native"
                    error={isValid}
                    helperText={helperTextForm}
                    name={fielItemValue.attributes.field_name}
                    variant="outlined"
                    InputProps={{
                        inputProps: {
                            style: { WebkitAppearance: 'textfield', margin: "0px" },
                            appearance: 'none',
                            inputMode: "numeric"
                        }
                    }}
                    onChange={(inputField: React.ChangeEvent<HTMLInputElement>) => this.handleChange(inputField, mainIndex, index)}
                />
            )
        };
        return fieldTypeFactories[fielItemValue.attributes.field_type] || null;
    };

    editDelete = (updateItem: any, index: number) => {
        return (
            <Box>
                <Box>
                    <Typography onClick={() => this.handleEdit(updateItem, index)}>Edit</Typography>
                    <Typography onClick={() => this.handleDelete(index)}>Delete</Typography>
                </Box>
            </Box>
        )
    }

    render() {
        return (
            // Customizable Area Start
            <Box sx={webStyle.formContainerDashbaord}>
                <form
                    data-testid="formSubmitTestId"
                    onSubmit={this.handleSubmit}
                >
                    {this.state.sortedFormSection.map((item: any, mainIndex: number) => {
                        let isMultiple = item?.attributes?.multiple;
                        return (
                            <Box key={mainIndex} >
                                <Box key={mainIndex}>
                                    <Box key={mainIndex} sx={webStyle.priotiMain}>
                                        {
                                            !item.attributes.multiple &&
                                                item.attributes.name == "Priorities" ?
                                                this.renderAddPrioritiesButton(item.attributes.name)
                                                : item.attributes.multiple ? this.editDelete(item, mainIndex) : this.renderFormSectionName(item.attributes.name)
                                        }
                                        {!item.attributes.multiple &&
                                            <NoteMessageText>{item.attributes.note}</NoteMessageText>
                                        }
                                        {item.attributes.form_fields.data.map((fielItemValue: any, index: number) => {
                                            return (
                                                <Box key={index} sx={webStyle.pageFirstInput}
                                                    data-testid="checkBoxTestId"
                                                >
                                                    {fielItemValue.attributes.field_type !== "checkbox" && (
                                                        <FormFieldName>
                                                            <div style={{ display: "flex" }}>
                                                                <div style={{ width: "30%" }}>
                                                                    {fielItemValue.attributes.field_name}
                                                                </div>
                                                                <div style={{ width: "70%" }}>
                                                                    {item.attributes.multiple ? ` - ${fielItemValue.attributes.field_value}` : ""}
                                                                </div>
                                                            </div>
                                                        </FormFieldName>
                                                    )}
                                                    {!item.attributes.multiple &&
                                                        this.renderAllFunction(fielItemValue, configJSON, mainIndex, index)
                                                    }
                                                </Box>
                                            )
                                        })}
                                        {item.attributes.name === "Priorities" && this.renderApplicantButton()}
                                    </Box>
                                </Box>
                            </Box>
                        );
                    })}
                    <Box sx={webStyle.resetSaveUploadButton}>
                        {
                            this.state.resertAllForm
                                ?
                                <ResepeActiveBtn data-testid="resetAllFeildButtonTestId" >{configJSON.resetButtonText}</ResepeActiveBtn>
                                :
                                <ResepeUnActiveBtn data-testid="resetAllFeildButtonTestId" >{configJSON.resetButtonText}</ResepeUnActiveBtn>
                        }
                        {this.state.saveAllForm
                            ?
                            <ResepeActiveBtn data-testid="saveFormButtonTestId" >{configJSON.saveButtonText}</ResepeActiveBtn>
                            :
                            <ResepeUnActiveBtn data-testid="saveFormButtonTestId" >{configJSON.saveButtonText}</ResepeUnActiveBtn>
                        }
                        {this.state.uploadAllForm ?
                            <ResepeActiveBtn data-testid="uploadFormButtonTestId" type="submit">{configJSON.uploadButtonText}</ResepeActiveBtn>
                            :
                            <ResepeUnActiveBtn data-testid="uploadFormButtonTestId" type="submit">{configJSON.uploadButtonText}</ResepeUnActiveBtn>
                        }
                    </Box>
                </form>
                {this.state.applicanformModalVisible && this.renderApplicantFormModal()}
            </Box>
            // Customizable Area End
        );
    }
}

const webStyle = {
    mainWrapper: {
        display: "flex",
        fontFamily: "Roboto-Medium",
        flexDirection: "column",
        paddingBottom: "30px",
        background: "#fff",
    },
    inputStyle: {
        borderBottom: "1px solid rgba(0, 0, 0, 0.6)",
        width: "100%",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    buttonStyle: {
        width: "100%",
        height: "45px",
        marginTop: "40px",
        border: "none",
        backgroundColor: "rgb(98, 0, 238)",
    },
    boxStyle: {
        maxWidth: '620px',
        margin: '0 auto',
    },
    successMsg: {
        color: 'red',
        display: 'flex',
        justifyContent: 'center',
    },
    errorMsg: {
        color: 'red',
        fontSize: '14px',
        paddingTop: '5px',
    },
    formContainerDashbaord: {
        flex: 1,
        marginTop: "0.5rem",
        border: "1px solid #FFF",
        borderRadius: "8px",
        padding: "50px",
        backgroundColor: "#FFF"
    },
    priotiMain: {
        borderRadius: "10px",
        border: "1px solid #D7D7D7",
        backgroundColor: "#FFF",
        marginBottom: "20px",
        padding: "20px",
        "& .MuiFormHelperText-root.Mui-error": {
            color: "#f44336",
            marginLeft: "0px"
        }
    },
    noOfDraw: {
        width: "100%",
        borderBottom: "1px solid #D7D7D7",
        paddingBottom: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItem: "center"
    },
    prioritiesAddButton: {
        width: "70%",
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "15px",
        alignItems: "center",
        gap: "4rem",
        marginTop: "15px",
        borderBottom: "1px solid #D7D7D7"
    },
    noDrawingText: {
        width: "100%",
        color: "rgba(0, 0, 0, 0.85)",
        fontSize: "24px",
        fontWeight: 700
    },
    additionalChargeTxt: {
        color: "#EA0505",
        fontSize: "18px",
        fontWeight: 400,
        margin: "10px 0px 0px 0px"
    },
    pagedrwaingInputFeild: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "10px",
    },
    mainHeadingsTxt: {
        color: "var(--Black, #000)",
        fontSize: "18px",
        fontWeight: 500,
        padding: "10px 0px"
    },
    astrix: {
        color: "red",
    },
    pageFirstInput: {
        display: "flex",
        flexDirection: "column",
        width: "auto",
        "& .MuiFormHelperText-root.Mui-error": {
            color: "#f44336",
            marginLeft: "0px"
        },
        "& .MuiOutlinedInput-input": {
            padding: "18.5px 14px"
        }
    },
    FormInputContainer: {
        display: "flex",
        flexDirection: "row",
        margin: "3px 0px 6px 0px",
        alignItems: "center"
    },
    modalContainer: {
        overflow: "scroll",
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline"
    },
    paper: {
        padding: "10px 20px 10px 20px",
        backgroundColor: "white",
        color: "#000",
        width: "600px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        borderRadius: "8px",
        "@media(max-width:767px)": {
            width: "400px",
        },
        "@media(max-width:575px)": {
            width: "280px",
        },
    },
    modalHeading: {
        fontSize: "24px",
        fontWeight: 700
    },
    ModalInputPara: {
        color: "red",
        fontSize: "16px",
    },
    prioritiesAddButtonApplicant: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "15px",
        alignItems: "center",
        gap: "4rem"
    },
    priotiText: {
        color: "#000",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "normal"
    },
    modalInputButton: {
        marginTop: "20px",
        display: "flex",
        gap: "20px",
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
    },
    resetSaveUploadButton: {
        display: "flex",
        justifyContent: "flex-start",
        gap: "1.5rem",
        margin: "20px 0px"
    },
};

const CheckedIcon = styled(Box)({
    borderRadius: "5px",
    backgroundColor: "#0B336A",
    "&:before": {
        width: "18px",
        height: "18px",
        display: "block",
        backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        backgroundRepeat: "no-repeat",
        content: "''"
    },
    "input:hover ~ &": {
        backgroundColor: "rgba(0,0,0,0)"
    },
    "& .MuiIconButton-label": {
        border: "1px solid #d5cece",
        width: "100%",
        display: "flex",
        alignItems: "inherit",
        justifyContent: "inherit",
        padding: "4px",
        borderRadius: "4px"
    },
});

const OuterIcon = styled(Box)({
    width: "24px",
    height: "24px",
    border: "1px solid #d5cece",
    display: "flex",
    alignItems: "inherit",
    justifyContent: "inherit",
    borderRadius: "4px",
    "&:before": {
        backgroundColor: "#dbdbdbd"
    }
});

const FormControlInput = styled(FormControlLabel)({
    color: "#000",
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
        color: "#0B336A"
    }
});

const NumberField = styled(TextField)({
    width: "282px",
    display: "inline-block"
});

const PriotiesButton = styled(Button)({
    color: "#FFF",
    width: "100%",
    maxWidth: "310px",
    fontSize: "16px",
    height: "48px",
    flexShrink: 0,
    borderRadius: "4px",
    backgroundColor: "rgb(22,67,111)",
    backgroundImage: "linear-gradient(to bottom right, rgb(22,67,111), rgb(78,109,132))",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "capitalize"
});

const PrioriteAddCancelButton = styled(Button)({
    display: "flex",
    width: "160px",
    height: "40px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    border: "1px solid #0B336A",
    backgroundColor: "rgb(22,67,111)",
    backgroundImage: "linear-gradient(to bottom right, rgb(22,67,111), rgb(78,109,132))",
    color: "#fff",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: 700,
    "&:hover": {
        backgroundColor: "rgb(22,67,111)",
        backgroundImage: "linear-gradient(to bottom right, rgb(22,67,111), rgb(78,109,132))",
        color: "#fff"
    }
});

const ResepeActiveBtn = styled(Button)({
    display: "flex",
    width: "160px",
    height: "40px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    border: "1px solid #0B336A",
    backgroundColor: "#09356D",
    color: "#fff",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: 700,
    "&:hover": {
        backgroundColor: "#09356D",
        color: "#fff"
    }
});

const ResepeUnActiveBtn = styled(Button)({
    display: "flex",
    width: "160px",
    height: "40px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    border: "1px solid #0B336A",
    backgroundColor: "#F5F7FA",
    color: "#09356D",
    textAlign: "center",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal"
});

const TextAreaFields = styled(TextField)({
    "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button": {
        webkitAppearance: "none",
        mozAppearance: "none",
        appearance: "none",
        margin: "0"
    },
    "& .MuiOutlinedInput-multiline": {
        padding: "0px",
        height: "50px"
    },
    "& .MuiBox-root-95 .MuiOutlinedInput-input": {
        padding: "0px"
    },
    "& .MuiFormHelperText-root.Mui-error": {
        color: "#f44336",
        marginLeft: "0px"
    }
});

const FormSectionName = styled(Typography)({
    color: "rgba(0, 0, 0, 0.85)",
    fontSize: "24px",
    fontWeight: 700,
    "@media (max-width: 720px)": {
        fontSize: "18px !important",
        fontWeight: 600
    },
    "@media (max-width: 490px)": {
        fontSize: "14px !important",
        fontWeight: 600
    }
});

const FormFieldName = styled(Typography)({
    color: "var(--Black, #000)",
    fontSize: "18px",
    fontWeight: 500,
    padding: "10px 0px",
    "@media (max-width: 600px)": {
        fontSize: "14px !important",
        fontWeight: 400
    },
    "@media (max-width: 490px)": {
        fontSize: "12px !important",
        fontWeight: 300
    }
});

const ApplicantPrioritiesText = styled(Typography)({
    color: "#000",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    "@media (max-width: 600px)": {
        fontSize: "14px",
        fontWeight: 400
    },
    "@media (max-width: 490px)": {
        fontSize: "12px",
        fontWeight: 300,
        textAlign: "start"
    }
});

const NoteMessageText = styled(Typography)({
    color: "red",
    fontSize: "16px",
    marginTop: "10px",
    "@media (max-width: 600px)": {
        fontSize: "14px !important",
        fontWeight: 400
    },
    "@media (max-width: 490px)": {
        fontSize: "12px !important",
        fontWeight: 300
    }
});

