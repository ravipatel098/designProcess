import React from "react";

import {
    Box,
    Button,
    TextField,
    MenuItem
    // Customizable Area Start
    ,
    Typography,
    styled,
    Checkbox,
    FormControlLabel,
    Modal,
    Fade,
    withStyles,
    Tooltip
    // Customizable Area End
} from "@material-ui/core";


// Customizable Area Start
// export const configJSON = require("./config");
import { configJSON } from "./config"
// Customizable Area End

import MultipageFormsController, {
    Props,
} from "./MultipageFormsController.web";

export default class MultipageForms extends MultipageFormsController {
    constructor(props: Props) {
        super(props);
        // Customizable Area Start
        // Customizable Area End
    }

    // Customizable Area Start

    renderJurisdiction = () => {
        return (
            <Box sx={webStyle.priotiMain}>
                <Box sx={webStyle.jurisdictionMainForm}>
                    <Box sx={webStyle.juriDictionHeader}>
                        <Typography style={webStyle.typeApplicstionText}>{configJSON.juricdictionFeildHeading}</Typography>
                    </Box>
                    <TextField
                        data-testid="typeSeelctionTestId"
                        inputProps={webStyle.txt}
                        fullWidth
                        id="outlined-select-currency-native"
                        select
                        value={this.state.dictionSelected}
                        error={this.state.dictionSelectedError}
                        helperText={this.state.dictionSelectedError && configJSON.requiredFeildError}
                        variant="outlined"
                        onChange={this.selectJuricDiction}
                    >
                        {this.state.applicantType.map((option: { value: string }) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Box sx={webStyle.juriDictionHeader}>
                        <Typography style={webStyle.typeApplicstionText}>{configJSON.typeApplicationHeading}</Typography>
                    </Box>
                    <TextField
                        fullWidth
                        data-testid="applicationTypeSelectTestId"
                        id="outlined-select-currency-native"
                        select
                        value={this.state.typeSelection}
                        error={this.state.typeSelectionError}
                        helperText={this.state.typeSelectionError && configJSON.requiredFeildError}
                        variant="outlined"
                        onChange={this.selectApplicationType}
                    >
                        {this.state.applicantType.map((optionType: { value: string }) => (
                            <MenuItem key={optionType.value} value={optionType.value}>
                                {optionType.value}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Box sx={webStyle.juriDictionHeader}>
                        <Typography style={webStyle.typeApplicstionText}>{configJSON.typeSpecificationHeading}</Typography>
                    </Box>
                    <TextField
                        fullWidth
                        data-testid="specificationTypeSelectTestId"
                        id="outlined-select-currency-native"
                        select
                        value={this.state.specificationSelection}
                        error={this.state.specificationSelectionError}
                        helperText={this.state.specificationSelectionError && configJSON.requiredFeildError}
                        variant="outlined"
                        onChange={this.specifictionSelection}
                    >
                        {this.state.specificationType.map((optionSpecification: { value: string }, index: number) => (
                            <MenuItem key={index} value={optionSpecification.value}>
                                {optionSpecification.value}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Typography style={webStyle.additionalChargeTxt}>{configJSON.noteMessage}</Typography>
                </Box>
            </Box>
        )
    }

    renderDescriptionPart = () => {
        return (
            <Box sx={webStyle.priotiMain}>
                <Box style={{
                    width: "100%",
                    borderBottom: "1px solid #D7D7D7",
                    paddingBottom: "5px",
                    display: "flex",
                    justifyContent: "space-between",
                    // alignItems: "center"
                }}>
                    <Typography style={webStyle.abstractTitle}>{configJSON.completeProvisionHeading}</Typography>
                </Box>
                <Typography style={webStyle.mainHeadingsTxt}>{configJSON.noOfPagesLabel}</Typography>
                <TextField
                    data-testid="completeProvisionNumberTestId"
                    minRows={10}
                    style={{ width: "230px" }}
                    InputProps={{
                        inputProps: {
                            max: 500, min: 0o1
                        }
                    }}
                    value={this.state.provisionalPart}
                    type="number"
                    error={this.state.provisionalPartError}
                    helperText={this.state.provisionalPartError ? configJSON.requiredFeildError : ""}
                    variant="outlined"
                    onChange={this.provisionalSlection}
                />
            </Box>
        )
    }

    renderClaimForm = () => {
        return (
            <Box style={webStyle.priotiMain}>
                <Box style={{
                    width: "100%",
                    borderBottom: "1px solid #D7D7D7",
                    paddingBottom: "5px",
                    display: "flex",
                    justifyContent: "space-between",
                    // alignItems: "center"
                }}>
                    <Typography style={webStyle.abstractTitle}>{configJSON.claimsLabel}</Typography>
                    <Typography style={webStyle.additionalChargeTxtClaims}>{configJSON.additionalChargeMessage}</Typography>
                </Box>
                <Box sx={webStyle.jurisdictionMainForm} >
                    <Box style={webStyle.claimsMainBoxStyle}>
                        <Box>
                            <Typography style={webStyle.mainHeadingsTxt}>{configJSON.numberOfclaimsLabel}</Typography>
                            <TextField
                                data-testid="noOfClaimsTestId"
                                style={{ width: "230px" }}
                                InputProps={{
                                    inputProps: {
                                        max: 500, min: 1
                                    }
                                }}
                                minRows={10}
                                type="number"
                                fullWidth
                                value={this.state.additionalClaim}
                                error={this.state.additionalClaimError}
                                helperText={this.state.additionalClaimError ? configJSON.requiredFeildError : ""}
                                variant="outlined"
                                onChange={this.claimSelection}
                            />
                        </Box>
                        <Box>
                            <Typography style={webStyle.mainHeadingsTxt}>{configJSON.noOfPagesLabel}</Typography>
                            <TextField
                                data-testid="noOfAdditionalPageTestId"
                                style={{ width: "230px" }}
                                InputProps={{
                                    inputProps: {
                                        max: 500, min: 1
                                    }
                                }}
                                minRows={10}
                                type="number"
                                fullWidth
                                value={this.state.claimsPages}
                                error={this.state.absractPageCountError}
                                helperText={this.state.absractPageCountError ? configJSON.requiredFeildError : ""}
                                variant="outlined"
                                onChange={this.claimDataPageSelection}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }

    renderAbstract = () => {
        return (
            <Box style={webStyle.priotiMain}>
                <Box style={{
                    width: "100%",
                    borderBottom: "1px solid #D7D7D7",
                    paddingBottom: "5px",
                    display: "flex",
                    justifyContent: "space-between",
                    // alignItems: "center"
                }}>
                    <Typography style={webStyle.abstractTitle}>{configJSON.abstractHeading}</Typography>
                </Box>
                <Box sx={webStyle.jurisdictionMainForm} >
                    <Typography style={webStyle.mainHeadingsTxt}>{configJSON.noOfPagesLabel}</Typography>
                    <TextField
                        data-testid="noOfAbstractPageTestId"
                        style={{ width: "230px" }}
                        InputProps={{
                            inputProps: {
                                max: 500, min: 1
                            }
                        }}
                        minRows={10}
                        type="number"
                        value={this.state.absractPageCount}
                        error={this.state.absractPageCountError}
                        helperText={this.state.absractPageCountError ? configJSON.requiredFeildError : ""}
                        variant="outlined"
                        onChange={this.abstractCountSelection}
                    />
                </Box>
            </Box>
        )
    }

    renderAddDrawings = () => {
        return (
            <Box style={{
                backgroundColor: "#FFF",
                margin: "20px 0px",
                borderRadius: "10px",
                border: "1px solid grey",
                padding: "20px"
            }}>
                <Box style={{
                    width: "100%",
                    borderBottom: "1px solid #D7D7D7",
                    paddingBottom: "5px",
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <Typography style={webStyle.noDrawingText}>{configJSON.numberOfDrawingHeading}</Typography>
                </Box>
                <Box style={webStyle.manageDrawingForm}>
                    <Box style={webStyle.pagedrwaingInputFeild}>
                        <Box sx={webStyle.pageFirstInput}>
                            <Typography style={webStyle.mainHeadingsTxt}>{configJSON.noOfPagesLabel}</Typography>
                            <TextField
                                data-testid="noOfDrawingPageTestId"
                                style={{ width: "230px" }}
                                InputProps={{
                                    inputProps: {
                                        max: 500, min: 1
                                    }
                                }}
                                minRows={10}
                                type="number"
                                fullWidth
                                value={this.state.drwaingPageCount}
                                error={this.state.drwaingSequenceCountError}
                                helperText={this.state.drwaingSequenceCountError ? configJSON.requiredFeildError : ""}
                                variant="outlined"
                                onChange={this.pageCountForDraw}
                            />
                        </Box>
                        <Box sx={webStyle.drwaingInput}>
                            <Typography style={webStyle.mainHeadingsTxt}>{configJSON.numberOfDrawingHeading}</Typography>
                            <TextField
                                data-testid="noOfDrawingTestId"
                                style={{ width: "230px" }}
                                InputProps={{
                                    inputProps: {
                                        max: 500, min: 1
                                    }
                                }}
                                minRows={10}
                                type="number"
                                fullWidth
                                value={this.state.drawingClaimsCount}
                                error={this.state.drawingClaimsCountError}
                                helperText={this.state.drawingClaimsCountError ? configJSON.requiredFeildError : ""}
                                variant="outlined"
                                onChange={this.claimDrawCount}
                            />
                        </Box>
                    </Box>
                    <Box style={webStyle.pagedrwaingInputFeild}>
                        <Box sx={webStyle.pageFirstInput}>
                            <Typography style={webStyle.mainHeadingsTxt}>{configJSON.sequenceListingLabel}</Typography>
                            <TextField
                                data-testid="sequenceListNumberTestId"
                                minRows={10}
                                type="number"
                                fullWidth
                                style={{ width: "230px" }}
                                InputProps={{
                                    inputProps: {
                                        max: 500, min: 1
                                    }
                                }}
                                value={this.state.drwaingSequenceCount}
                                error={this.state.drwaingSequenceCountError}
                                helperText={this.state.drwaingSequenceCountError ? configJSON.requiredFeildError : ""}
                                variant="outlined"
                                onChange={this.sequenceDrwCount}
                            />
                        </Box>
                        <Box sx={webStyle.drwaingInput}>
                            <Typography style={webStyle.mainHeadingsTxt}>{configJSON.numberOfPriorityLabel}</Typography>
                            <TextField
                                data-testid="noOfPrioritiesTestId"
                                minRows={10}
                                type="number"
                                fullWidth
                                style={{ width: "230px" }}
                                InputProps={{
                                    inputProps: {
                                        max: 500, min: 1
                                    }
                                }}
                                value={this.state.drwaPriorityCount}
                                error={this.state.drwaPriorityCountError}
                                helperText={this.state.drwaPriorityCountError ? configJSON.requiredFeildError : ""}
                                variant="outlined"
                                onChange={this.drawPriorityCount}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }

    renderAddCopyData1 = () => {
        return (
            <Box>
                <Box style={{
                    display: "flex",
                    borderRadius: "8px",
                    border: "1px solid #D7D7D7",
                    backgroundColor: "#FFF",
                    padding: "1.3rem",
                    flexDirection: "row",
                    marginTop: "20px",
                    justifyContent: "space-between"
                }}>
                    <Box style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <Box>
                            {this.state.addPersonalInfo.map((type: { infoType: string, id: number }) => {
                                return (
                                    <Typography key={type.id} style={webStyle.detailsInputTxt as React.CSSProperties}>{type.infoType}</Typography>
                                );
                            })}
                        </Box>
                        <Box>
                            {this.state.items?.map((index: number) => {
                                return (
                                    <Typography key={index} style={webStyle.infoDetailsTxt as React.CSSProperties}>{index}</Typography>
                                );
                            })}
                        </Box>
                    </Box>
                    <Box style={{
                        display: "flex",
                        gap: "20px"
                    }}>
                        <Typography>Edit</Typography>
                        <Typography>Delete</Typography>
                    </Box>
                </Box>
            </Box>
        )
    }

    renderAddPrioritiesForm = () => {
        return (
            <Box style={webStyle.priotiMain}>
                <Box style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: "15px",
                    alignItems: "center",
                    gap: "4rem",
                    marginTop: "15px"
                }}>
                    <Typography style={webStyle.priotiText}>{configJSON.priorityHeading}</Typography>
                    <PriotiesButton>{configJSON.addPriorityButtonText}</PriotiesButton>
                    <Box />
                </Box>
                <Typography style={webStyle.totalPageMessage}>{configJSON.totalCountOfPageMessage}</Typography>
                <Box sx={webStyle.typeOfApplication}>
                    <Typography style={webStyle.typeApplicstionText}>{configJSON.typeApplicationHeading}</Typography>

                </Box>
                <Box sx={webStyle.PrioritiesContainer}>
                    <TextField
                        data-testid="typeOfApplicationInputTestId"
                        name="motypeOffbile"
                        fullWidth
                        value={this.state.changeApplicantionType}
                        variant="outlined"
                        onChange={this.onChangeApplicantionType}
                    />
                    <Box style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0px 0px"
                    }}>
                        <Typography style={webStyle.mainHeadingsTxt}>{configJSON.addressServiceHeading}</Typography>
                        <Typography style={webStyle.starSign}>{configJSON.astrick}</Typography>
                    </Box>
                    <TextField
                        data-testid="addressServiceInputTestId"
                        name="addressForServices"
                        type="text"
                        fullWidth
                        value={this.state.serviceAddress}
                        error={this.state.serviceAddressError}
                        helperText={this.state.serviceAddressError && configJSON.addressServiceErrorMessage}
                        variant="outlined"
                        onChange={this.onSelectAddressService}
                    />
                    <Box style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0px 0px"
                    }}>
                        <Typography style={webStyle.mainHeadingsTxt}>{configJSON.stateHeading}</Typography>
                        <Typography style={webStyle.starSign}>{configJSON.astrick}</Typography>
                    </Box>
                    <TextField
                        data-testid="stateSelectTestId"
                        name="stateSelection"
                        fullWidth
                        value={this.state.stateSelection}
                        error={this.state.stateSelectionError}
                        select
                        helperText={this.state.stateSelectionError && configJSON.requiredFeildError}
                        variant="outlined"
                        onChange={this.statesSelection}
                    >
                        {this.state.countryList.map((option: { value: string }) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))};
                    </TextField>
                    <Box style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0px 0px"
                    }}>
                        <Typography style={webStyle.mainHeadingsTxt}>{configJSON.mobileNumberHeading}</Typography>
                        <Typography style={webStyle.starSign}>{configJSON.astrick}</Typography>
                    </Box>
                    <TextField
                        data-testid="mobileNumberTestId"
                        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                        name="mobileNumber"
                        fullWidth
                        value={this.state.mobileNumberSelect}
                        error={this.state.mobileNumberSelectError}
                        helperText={this.state.mobileNumberSelectError ? configJSON.mobileNumberErrorMessage : ""}
                        variant="outlined"
                        onChange={this.phoneNumberSelect}
                    />
                    <Typography style={webStyle.mainHeadingsTxt}>{configJSON.telephoneNumberHeading}</Typography>
                    <TextField
                        data-testid="telephoneNoTestId"
                        name="telephone"
                        fullWidth
                        value={this.state.telephoneNumberSelect}
                        error={this.state.telephoneNumberSelectError}
                        helperText={this.state.telephoneNumberSelectError && configJSON.telephoneNumberErrorMessage}
                        variant="outlined"
                        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                        onChange={this.onTelephoneSelect}
                    />
                    <Box style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0px 0px"
                    }}>
                        <Typography style={webStyle.mainHeadingsTxt}>{configJSON.emailHeading}</Typography>
                        <Typography style={webStyle.starSign}>{configJSON.astrick}</Typography>
                    </Box>
                    <TextField
                        data-testid="emailTestId"
                        name="email"
                        type="email"
                        fullWidth
                        value={this.state.emailSelection}
                        error={this.state.emailSelectionError}
                        helperText={this.state.emailSelectionError && configJSON.emailErrorMessage}
                        variant="outlined"
                        onChange={this.onEmailChange}
                    />
                    <Typography style={webStyle.mainHeadingsTxt}>{configJSON.aleternativeEmailHeading}</Typography>
                    <TextField
                        data-testid="alternativeEmailTestId"
                        name="alternativeEmail"
                        type="email"
                        fullWidth
                        value={this.state.alternativeEmail}
                        error={this.state.alternativeEmailError}
                        helperText={this.state.alternativeEmailError ? configJSON.aleternativeEmailErrorMessage : ""}
                        variant="outlined"
                        onChange={this.alternativeEmailSelection}
                    />
                    <Box style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0px 0px"
                    }}>
                        <Typography style={webStyle.mainHeadingsTxt}>{configJSON.abstractHeading}</Typography>
                        <Typography style={webStyle.starSign}>{configJSON.astrick}</Typography>
                    </Box>
                    <TextField
                        data-testid="abstractTextTestId"
                        name="abstarctApplicant"
                        type="text"
                        fullWidth
                        value={this.state.abstractChange}
                        error={this.state.abstractChangeError}
                        helperText={this.state.abstractChangeError && configJSON.abstractTextChangeError}
                        variant="outlined"
                        onChange={this.abstractChange}
                    />
                    <Box style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0px 0px"
                    }}>
                        <Typography style={webStyle.mainHeadingsTxt}>{configJSON.descriptionHeading}</Typography>
                        <Typography style={webStyle.starSign}>{configJSON.astrick}</Typography>
                    </Box>
                    <TextField
                        data-testid="descriptionInputTextTestId"
                        name="descriptionApplicant"
                        type="text"
                        fullWidth
                        value={this.state.descriptionChnage}
                        error={this.state.descriptionChnageError}
                        helperText={this.state.descriptionChnageError ? configJSON.descriptionTextChangeError : ""}
                        variant="outlined"
                        onChange={this.handleDescriptionChange}
                    />
                    <Typography style={webStyle.mainHeadingsTxt}>{configJSON.claimsHeading}</Typography>
                    <TextField
                        data-testid="claimsTextInputTestId"
                        name="claimsApplicant"
                        type="text"
                        fullWidth
                        value={this.state.claimsChange}
                        error={this.state.claimsChangeError}
                        helperText={this.state.claimsChangeError ? configJSON.abstractTextChangeError : ""}
                        variant="outlined"
                        onChange={this.handleClaimChange}
                    />
                    <Box style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: "15px",
                        alignItems: "center",
                        gap: "4rem"
                    }}>
                        <Typography style={webStyle.priotiText}>{configJSON.applicantsHeading}</Typography>
                        <PriotiesButton
                            data-testid="applicantModalButtonTestId"
                            onClick={this.applicantModalShow}
                        >{configJSON.addApplicantsButtonText}</PriotiesButton>
                        <Box />
                    </Box>
                </Box>
            </Box>
        )
    }

    renderAddCopyData2 = () => {
        return (
            <Box style={{
                display: "flex",
                borderRadius: "8px",
                border: "1px solid #D7D7D7",
                backgroundColor: "#FFF",
                padding: "1.3rem",
                flexDirection: "row",
                marginTop: "20px",
                justifyContent: "space-between"
            }}>
                <Box style={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <Box>
                        {this.state.addInfoInventorData.map((type: { infoInventorType: string, id: number }) => {
                            return (
                                <Typography key={type.id} style={webStyle.detailsInputTxt as React.CSSProperties}>{type.infoInventorType}</Typography>
                            );
                        })}
                    </Box>
                    <Box>
                        {this.state.addInfoValue.map((value: { infoValue: string, id: number }) => {
                            return (
                                <Typography key={value.id} style={webStyle.infoDetailsTxt as React.CSSProperties}>{value.infoValue}</Typography>
                            );
                        })}
                    </Box>
                </Box>
                <Box style={{
                    display: "flex",
                    gap: "20px",
                }}>
                    <Typography>Edit</Typography>
                    <Typography>Delete</Typography>
                </Box>
            </Box>
        )
    }

    renderInventorAsApplicant = () => {
        return (
            <Box style={{
                borderRadius: "8px",
                border: "1px solid #D7D7D7",
                backgroundColor: "#FFF",
                margin: "20px 0px",
                padding: "20px"
            }}
            >
                <Box sx={webStyle.abstractLine}>
                    <Typography style={webStyle.inventorsTxts}>{configJSON.applicantsDeclareInfoText}</Typography>
                </Box>
                <Box sx={webStyle.copyInventorData}>
                    {this.state.applicantCopyData.map((applicant: { infoProvide: string, id: number }) => {
                        return (
                            <FormControlInput
                                key={applicant.id}
                                data-testid="applicantFormControlTestId"
                                control={
                                    <Checkbox
                                        data-testid="applicantsInfoDeclareCheckBoxTestId"
                                        disableRipple
                                        color="default"
                                        value={applicant.infoProvide}
                                        checked={this.state.selectedInfo.includes(applicant.infoProvide)}
                                        checkedIcon={<OuterIcon><CheckedIcon></CheckedIcon></OuterIcon>}
                                        icon={<OuterIcon></OuterIcon>}
                                        inputProps={{ "aria-label": "decorative checkbox" }}
                                        onChange={this.submitPersonalInfo}
                                    />
                                }
                                label={applicant.infoProvide}
                            />
                        );
                    })}
                </Box>
                {
                    this.state.applicantFormError &&
                    <Typography style={webStyle.infoErrorMessage}>{configJSON.checkBoxError}</Typography>
                }
            </Box >
        )
    }

    renderInventorAddButton = () => {
        return (
            <Box style={{
                borderRadius: "8px",
                border: "1px solid #D7D7D7",
                backgroundColor: "#FFF",
                marginTop: "20px",
                padding: "20px"
            }}>
                <Box style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <FormControlInput
                        data-testid="inventorCopyDataSelectButtonId"
                        control={<Checkbox
                            disableRipple
                            color="default"
                            onChange={this.applicantSelected}
                            checked={this.state.inventorRequestSelected}
                            checkedIcon={<OuterIcon><CheckedIcon></CheckedIcon></OuterIcon>}
                            icon={<OuterIcon></OuterIcon>}
                            inputProps={{ "aria-label": "decorative checkbox" }} />}
                        label={undefined}
                    />
                    <Typography style={webStyle.copyDataTxt}>{configJSON.inventorCopyDataText}</Typography>

                </Box>
                <Box style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: "15px",
                    alignItems: "center",
                    gap: "4rem",
                    marginTop: "15px"
                }}>
                    <Typography style={webStyle.priotiText}>{configJSON.inventorHeadingText}</Typography>
                    <PriotiesButton
                        data-testid="addInventorModalButtonTestId"
                        onClick={this.inventorsModalShow}
                    >{configJSON.addInventorButtonText}</PriotiesButton>
                    <Box />
                </Box>
            </Box>
        )
    }

    renderFormSelect = () => {
        return (
            <Box>
                <Box style={{
                    borderRadius: "4px",
                    border: "1px solid #D7D7D7",
                    backgroundColor: "#FFF",
                    padding: "20px 20px",
                    alignSelf: "center",
                    justifyContent: "space-around",
                    alignItems: "center",
                    margin: "20px 0px"
                }}>
                    <Box sx={webStyle.formSelectContainer}>
                        <Box style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px"
                        }}>
                            {this.state.formTypeSelect.map((values: { type: string, id: number }, index: number) => {
                                return (
                                    <FormControlInput
                                        key={values.id}
                                        data-testid="formTypeSelectId"
                                        control={
                                            <Checkbox
                                                data-testid={`formSelectCheckboxTestId${index}`}
                                                disableRipple
                                                value={values.type}
                                                color="default"
                                                onChange={this.checkFormHandle}
                                                checked={this.state.selectedCheckboxes.includes(values.type)}
                                                checkedIcon={<OuterIcon><CheckedIcon></CheckedIcon></OuterIcon>}
                                                icon={<OuterIcon></OuterIcon>}
                                                inputProps={{ "aria-label": "decorative checkbox" }}
                                            />
                                        }
                                        label={
                                            <Box>
                                                {values.type}

                                            </Box>
                                        }
                                    />);
                            })}
                        </Box>
                        {
                            this.state.formCheck && <Typography style={webStyle.infoErrorMessage}>{configJSON.checkBoxError}</Typography>
                        }
                    </Box>
                    <Typography style={webStyle.toBeSubmittedTxt}>{configJSON.proofDocumentSubmitText}</Typography>
                    <Box sx={webStyle.selectSubmitInfor}>
                        <FormControlInput
                            data-testid="agreeToShareInfoButttonTestId"
                            control={<Checkbox
                                disableRipple
                                color="default"
                                onChange={this.agreementCheckBox}
                                checked={this.state.checkboxValue}
                                checkedIcon={<OuterIcon><CheckedIcon></CheckedIcon></OuterIcon>}
                                icon={<OuterIcon></OuterIcon>}
                                inputProps={{ "aria-label": "decorative checkbox" }} />}
                            label={configJSON.agreeTermCondtionText}
                        />
                    </Box>
                    {
                        this.state.checkboxValueError && <Typography style={webStyle.infoErrorMessage}>{configJSON.checkBoxError}</Typography>
                    }
                </Box>
                <Box style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "1.5rem",
                    margin: "20px 0px",
                }}>
                    {this.state.resertAllForm ? <ResepeActiveBtn data-testid="resetAllFeildButtonTestId" onClick={this.resetForm}>{configJSON.resetButtonText}</ResepeActiveBtn> : <ResepeUnActiveBtn data-testid="resetAllFeildButtonTestId" onClick={this.resetForm}>{configJSON.resetButtonText}</ResepeUnActiveBtn>}
                    {this.state.saveAllForm ? <ResepeActiveBtn onClick={this.saveForm} data-testid="saveFormButtonTestId" >{configJSON.saveButtonText}</ResepeActiveBtn> : <ResepeUnActiveBtn data-testid="saveFormButtonTestId" onClick={this.saveForm} >{configJSON.saveButtonText}</ResepeUnActiveBtn>}
                    {this.state.uploadAllForm ? <ResepeActiveBtn data-testid="uploadFormButtonTestId" type="submit">{configJSON.uploadButtonText}</ResepeActiveBtn> : <ResepeUnActiveBtn data-testid="uploadFormButtonTestId" type="submit">{configJSON.uploadButtonText}</ResepeUnActiveBtn>}
                </Box>
            </Box>
        )
    }

    renderApplicantFormModal = () => {
        return (
            <Modal
                open={this.state.applicanformModalVisible}
                onClose={this.handleModalClose}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
                style={webStyle.modalContainer}
            >
                <Fade in={this.state.applicanformModalVisible}>
                    <Box style={{
                        padding: "10px 20px 10px 20px",
                        backgroundColor: "white",
                        color: "#000",
                        width: "600px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        borderRadius: "8px",
                    }}>
                        <Typography variant="h6" style={webStyle.modalHeading}>{configJSON.addApplicatns}</Typography>
                        <Typography style={webStyle.ModalInputPara}>
                            {configJSON.require}
                        </Typography>
                        <form
                            autoComplete="off"
                            noValidate
                            data-testid="applicantFormSubmitTestId"
                            onSubmit={this.handleSubmitApplicationModal}
                        >
                            <Box>
                                <Box style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    margin: "3px 0px 6px 0px",
                                }}>
                                    <Typography
                                        style={webStyle.profileHeading}>
                                        {configJSON.applicantNumber}
                                    </Typography>
                                    <Typography style={webStyle.astrix}>{configJSON.astrick}</Typography>
                                </Box>
                                <TextField
                                    placeholder="DS-1234"
                                    data-testid="applicationNumerInputTestId"
                                    fullWidth
                                    id="standard-required"
                                    variant="outlined"
                                    name="personName"
                                    size="small"
                                    // value={this.state.applicationNumber}
                                    onChange={this.handleChangeApplicationNumber}
                                />
                            </Box>
                            <Box
                                sx={webStyle.formHeaderContainer}>
                                <Box style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    margin: "3px 0px 6px 0px",
                                }}>
                                    <Typography
                                        style={webStyle.profileHeading}
                                    >
                                        {configJSON.applicant}
                                    </Typography>
                                    <Typography style={webStyle.astrix}>{configJSON.astrick}</Typography>
                                </Box>
                                <TextField
                                    data-testid="applicantNameInputTestId"
                                    placeholder="Enter Applicant Name"
                                    fullWidth
                                    variant="outlined"
                                    name="personName"
                                    size="small"
                                    // value={this.state.applicantName}
                                    onChange={this.handleChangeApplicationNumber}
                                    error={this.state.applicantNameError}
                                    helperText={
                                        this.state.applicantNameError
                                            ? configJSON.applicantError
                                            : ""
                                    }
                                />
                            </Box>
                            <Box sx={webStyle.formHeaderContainer}>
                                <Box style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    margin: "3px 0px 6px 0px",
                                }}>
                                    <Typography
                                        style={webStyle.profileHeading}
                                    >
                                        {configJSON.addressText}
                                    </Typography>
                                    <Typography
                                        style={webStyle.astrix}>{configJSON.astrick}</Typography>
                                </Box>
                                <TextField
                                    data-testid="addressChangeInputTestId"
                                    placeholder="Enter Address"
                                    fullWidth
                                    variant="outlined"
                                    name="personName"
                                    size="medium"
                                    rows={3}
                                    multiline={true}
                                    // value={this.state.applicantAddress}
                                    onChange={this.handleChangeApplicationNumber}
                                    error={this.state.applicantAddressError}
                                    helperText={
                                        this.state.applicantAddressError
                                            ? configJSON.addressError
                                            : ""
                                    }
                                />
                            </Box>
                            <Box sx={webStyle.formHeaderContainer}>
                                <Box style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    margin: "3px 0px 6px 0px",
                                }}>
                                    <Typography
                                        style={webStyle.profileHeading}
                                    >
                                        {configJSON.pincodeFieldText}
                                    </Typography>
                                    <Typography style={webStyle.astrix}>{configJSON.astrick}</Typography>
                                </Box>
                                <TextField
                                    data-testid="pincodeInputTestId"
                                    placeholder="Enter Pincode"
                                    fullWidth
                                    variant="outlined"
                                    name="pincode"
                                    size="small"
                                    // value={this.state.applicantPincode}
                                    onChange={this.handleChangeApplicationNumber}
                                    error={this.state.applicantPincodeError}
                                    helperText={
                                        this.state.applicantPincodeError
                                            ? configJSON.pincodeError
                                            : ""
                                    }
                                />
                            </Box>
                            <Box sx={webStyle.formHeaderContainer}>
                                <Box style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    margin: "3px 0px 6px 0px",
                                }}>
                                    <Typography
                                        style={webStyle.profileHeading}
                                    >
                                        {configJSON.townDiscrict}
                                    </Typography>
                                    <Typography style={webStyle.astrix}>{configJSON.astrick}</Typography>
                                </Box>
                                <TextField
                                    data-testid="cityInputTestId"
                                    placeholder="Enter Town/City/District"
                                    fullWidth
                                    variant="outlined"
                                    name="personName"
                                    size="small"
                                    // value={this.state.applicantCity}
                                    onChange={this.handleChangeApplicationNumber}
                                    error={this.state.applicantCityError}
                                    helperText={
                                        this.state.applicantCityError
                                            ? configJSON.applicantCityErrorMessage
                                            : ""
                                    }
                                />
                            </Box>
                            <Box sx={webStyle.formHeaderContainer}>
                                <Box style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    margin: "3px 0px 6px 0px",
                                }}>
                                    <Typography
                                        style={webStyle.profileHeading}
                                    >
                                        {configJSON.stateUnionHeading}
                                    </Typography>
                                    <Typography style={webStyle.astrix}>{configJSON.astrick}</Typography>
                                </Box>
                                <TextField
                                    data-testid="stateInputTestId"
                                    select
                                    placeholder="Select State/Union/Territory"
                                    fullWidth
                                    variant="outlined"
                                    name="personName"
                                    size="small"
                                    // value={this.state.applicantState}
                                    onChange={this.handleChangeApplicationNumber}
                                    error={this.state.applicantStateError}
                                    helperText={
                                        this.state.applicantStateError
                                            ? configJSON.stateUnionError
                                            : ""
                                    }
                                >
                                    {this.state.applicantType.map((option: { value: string }) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.value}
                                        </MenuItem>
                                    ))};
                                </TextField>
                            </Box>
                            <Box sx={webStyle.formHeaderContainer}>
                                <Box style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    margin: "3px 0px 6px 0px",
                                }}>
                                    <Typography
                                        style={webStyle.profileHeading}
                                    >
                                        {configJSON.countryHeading}
                                    </Typography>
                                    <Typography style={webStyle.astrix}>{configJSON.astrick}</Typography>
                                </Box>
                                <TextField
                                    data-testid="inventorsCountrySelectTestId"
                                    select
                                    placeholder="Select Country"
                                    fullWidth
                                    variant="outlined"
                                    name="personName"
                                    size="small"
                                    // value={this.state.applicantCountry}
                                    onChange={this.handleChangeApplicationNumber}
                                    error={this.state.applicantCountryError}
                                    helperText={
                                        this.state.applicantCountryError ? configJSON.countryError : ""
                                    }
                                >
                                    {this.state.applicantType.map((option: { value: string }) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.value}
                                        </MenuItem>
                                    ))};
                                </TextField>
                            </Box>
                            <Box style={{
                                marginTop: "20px",
                                display: "flex",
                                gap: "20px",
                            }}>
                                <PrioriteAddCancelButton variant="outlined"
                                    data-testid="cancelButtonTestId"
                                    onClick={this.handleModalClose}
                                >
                                    {configJSON.cancelButtonText}
                                </PrioriteAddCancelButton>
                                <PrioriteAddCancelButton
                                    variant="outlined"
                                    type="submit"
                                >
                                    {configJSON.addButtonText}
                                </PrioriteAddCancelButton>
                            </Box>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        );
    }

    renderInventorFormModal = () => {
        return (
            <Modal
                open={this.state.inventorformModalVisible}
                onClose={this.inventorsModalClose}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500
                }}
                style={webStyle.modalContainer}
            >
                <Fade in={this.state.inventorformModalVisible}>
                    <Box style={{
                        padding: "10px 20px 10px 20px",
                        backgroundColor: "white",
                        color: "#000",
                        width: "600px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        borderRadius: "8px",
                    }}>
                        <Typography variant="h6" style={webStyle.modalHeading}>{configJSON.addInventors}</Typography>
                        <Typography style={webStyle.ModalInputPara}>
                            {configJSON.require}
                        </Typography>
                        <form
                            autoComplete="off"
                            noValidate
                            data-testid="inventorsFormSubmitTestId"
                            onSubmit={this.handleSubmitInventorModal}
                        >
                            <Box>
                                <Box style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    margin: "3px 0px 6px 0px",
                                }}>
                                    <Typography
                                        style={webStyle.profileHeading}>
                                        {configJSON.applicantNumber}
                                    </Typography>
                                    <Typography style={webStyle.astrix}>{configJSON.astrick}</Typography>
                                </Box>
                                <TextField
                                    placeholder="DS-1234"
                                    data-testid="inventorsNumberINputTestId"
                                    fullWidth
                                    id="standard-required"
                                    variant="outlined"
                                    name="personName"
                                    size="small"
                                    value={this.state.inventorNumber}
                                    onChange={this.handleInventorNumberChange}
                                />
                            </Box>
                            <Box
                                sx={webStyle.formHeaderContainer}>
                                <Box style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    margin: "3px 0px 6px 0px",
                                }}>
                                    <Typography style={webStyle.profileHeading}
                                    >
                                        {configJSON.applicant}
                                    </Typography>
                                    <Typography
                                        style={webStyle.astrix}>
                                        {configJSON.astrick}
                                    </Typography>
                                </Box>
                                <TextField
                                    data-testid="inventorsNameInputTestId"
                                    fullWidth
                                    variant="outlined"
                                    name="personName"
                                    placeholder="Enter Applicant Name"
                                    size="small"
                                    value={this.state.inventorName}
                                    onChange={this.handleChangeInventorName}
                                    error={this.state.inventorNameError}
                                    helperText={
                                        this.state.inventorNameError
                                        && configJSON.applicantError}
                                />
                            </Box>
                            <Box sx={webStyle.formHeaderContainer}>
                                <Box style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    margin: "3px 0px 6px 0px",
                                }}>
                                    <Typography style={webStyle.profileHeading}>
                                        {configJSON.addressText}
                                    </Typography>
                                    <Typography style={webStyle.astrix}>{configJSON.astrick}</Typography>
                                </Box>
                                <TextField
                                    data-testid="inventorAddressChangeInputTestId"
                                    placeholder="Enter Address"
                                    fullWidth
                                    variant="outlined"
                                    name="personName"
                                    size="medium"
                                    rows={3}
                                    multiline={true}
                                    value={this.state.inventorAddress}
                                    onChange={this.handleInventorAddress}
                                    error={this.state.inventorAddressError}
                                    helperText={
                                        this.state.inventorAddressError
                                        && configJSON.addressError}
                                />
                            </Box>
                            <Box sx={webStyle.formHeaderContainer}>
                                <Box style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    margin: "3px 0px 6px 0px",
                                }}>
                                    <Typography
                                        style={webStyle.profileHeading}>
                                        {configJSON.pincodeFieldText}
                                    </Typography>
                                    <Typography style={webStyle.astrix}>{configJSON.astrick}</Typography>
                                </Box>
                                <TextField
                                    data-testid="inventorsPincodeInputTestId"
                                    placeholder="Enter Pincode"
                                    fullWidth
                                    variant="outlined"
                                    name="pincode"
                                    size="small"
                                    value={this.state.inventorPincode}
                                    onChange={this.handleInventorPincode}
                                    error={this.state.inventorPincodeError}
                                    helperText={
                                        this.state.inventorPincodeError
                                        && configJSON.pincodeError
                                    }
                                />
                            </Box>
                            <Box sx={webStyle.formHeaderContainer}>
                                <Box style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    margin: "3px 0px 6px 0px",
                                }}>
                                    <Typography style={webStyle.profileHeading}
                                    >
                                        {configJSON.townDiscrict}
                                    </Typography>
                                    <Typography style={webStyle.astrix}>{configJSON.astrick}</Typography>
                                </Box>
                                <TextField
                                    data-testid="inventorsCityInputTestId"
                                    placeholder="Enter Town/City/District"
                                    fullWidth
                                    variant="outlined"
                                    name="personName"
                                    size="small"
                                    value={this.state.inventorCity}
                                    onChange={this.handleInventorCity}
                                    error={this.state.inventorCityError}
                                    helperText={this.state.inventorCityError
                                        && configJSON.applicantCityErrorMessage}
                                />
                            </Box>
                            <Box sx={webStyle.formHeaderContainer}>
                                <Box style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    margin: "3px 0px 6px 0px",
                                }}>
                                    <Typography
                                        style={webStyle.profileHeading}
                                    >{configJSON.stateUnionHeading}</Typography>
                                    <Typography style={webStyle.astrix}>{configJSON.astrick}</Typography>
                                </Box>
                                <TextField
                                    data-testid="inventorsStateInputTestId"
                                    select
                                    placeholder="Select State/Union/Territory"
                                    fullWidth
                                    variant="outlined"
                                    name="personName"
                                    size="small"
                                    value={this.state.inventorState}
                                    onChange={this.handleInventorState}
                                    error={this.state.inventorStateError}
                                    helperText={this.state.inventorStateError && configJSON.stateUnionError}
                                >
                                    {this.state.applicantType.map((option: { value: string }) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.value}
                                        </MenuItem>
                                    ))};
                                </TextField>
                            </Box>
                            <Box sx={webStyle.formHeaderContainer}>
                                <Box style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    margin: "3px 0px 6px 0px",
                                }}>
                                    <Typography
                                        style={webStyle.profileHeading}
                                    >{configJSON.countryHeading}</Typography>
                                    <Typography style={webStyle.astrix}>{configJSON.astrick}</Typography>
                                </Box>
                                <TextField
                                    data-testid="countrySelectTestId"
                                    select
                                    placeholder="Select Country"
                                    fullWidth
                                    variant="outlined"
                                    name="personName"
                                    size="small"
                                    value={this.state.inventorCountry}
                                    onChange={this.handleInventorCountry}
                                    error={this.state.inventorCountryError}
                                    helperText={
                                        this.state.inventorCountryError && configJSON.countryError
                                    }
                                >
                                    {this.state.applicantType.map((option: { value: string }) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.value}
                                        </MenuItem>
                                    ))};
                                </TextField>
                            </Box>
                            <Box style={{
                                marginTop: "20px",
                                display: "flex",
                                gap: "20px",
                            }}>
                                <PrioriteAddCancelButton variant="outlined"
                                    data-testid="inventorsCancelButtonTestId"
                                    onClick={this.inventorsModalClose}
                                >
                                    {configJSON.cancelButtonText}
                                </PrioriteAddCancelButton>
                                <PrioriteAddCancelButton
                                    variant="outlined"
                                    type="submit"
                                >
                                    {configJSON.addButtonText}
                                </PrioriteAddCancelButton>
                            </Box>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        );
    }

    renderSaveSubmitFormModal = () => {
        return (
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                style={webStyle.modal}
                open={this.state.openSavedModal}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={this.state.openSavedModal}>
                    <Box sx={webStyle.savedModalContainer}>
                        <Typography>Success</Typography>
                        <Typography style={webStyle.savedModalHeading}>
                            {configJSON.applicantFormSuccess} {this.state.modalHeader} {configJSON.successFormText}
                        </Typography>
                        <Typography style={webStyle.savedModalPara}>
                            {configJSON.referenceId}
                        </Typography>
                        <Button
                            data-testid="doneButtonModalTestId"
                            style={webStyle.savedModalButton}>{configJSON.doneButtonText}</Button>
                    </Box>
                </Fade>
            </Modal>
        )
    }

    renderFormSubmitFailModal = () => {
        return (
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                style={webStyle.modal}
                open={this.state.openFailedModal}
                onClose={this.handleFailedModalClose}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={this.state.openFailedModal}>
                    <Box sx={webStyle.failedModalContainer}>
                        <Typography>Failed</Typography>
                        <Typography style={webStyle.savedModalHeading}>
                            {configJSON.failedFormText}
                        </Typography>
                        <Typography style={webStyle.savedModalPara}>
                            {configJSON.tryAgainText}
                        </Typography>
                        <Button data-testid="retryButtonTestId" onClick={this.handleFailedModalClose} style={webStyle.savedModalButton}>{configJSON.retryButtonText}</Button>
                    </Box>
                </Fade>
            </Modal>
        );
    }
    // Customizable Area End
    render() {
        return (
            // Customizable Area Start
            <>
                <Box style={{
                    display: "flex",
                    margin: "4rem",
                    borderRadius: "8px",
                    backgroundColor: "#275080"
                }}>
                    <form autoComplete="off" noValidate
                        data-testid="formSubmitTestId"
                        style={{ margin: "20px", padding: "10px", backgroundColor: "#FFF", borderRadius: "8px" }}
                        onSubmit={this.formSubmit}
                    >
                        {this.renderJurisdiction()}
                        {this.renderDescriptionPart()}
                        {this.renderClaimForm()}
                        {this.renderAbstract()}
                        {this.renderAddDrawings()}
                        {this.renderAddPrioritiesForm()}
                        {this.renderAddCopyData1()}
                        {this.renderInventorAddButton()}
                        {this.renderAddCopyData2()}
                        {this.renderInventorAsApplicant()}
                        {this.renderFormSelect()}
                    </form>
                    {this.renderApplicantFormModal()}
                    {this.renderInventorFormModal()}
                    {this.renderSaveSubmitFormModal()}
                    {this.renderFormSubmitFailModal()}
                </Box>
            </>
            // Customizable Area End
        );
    }
}

// Customizable Area Start
const webStyle = {
    txt: {
        color: "#000"
    },
    successMsg: {
        color: 'red',
        display: 'flex',
        justifyContent: 'center'
    },
    errorMsg: {
        color: 'red',
        fontSize: '14px',
        paddingTop: '5px'
    },
    mainHeadingsTxt: {
        color: "var(--Black, #000)",
        fontSize: "18px",
        fontWeight: 500,
        padding: "10px 0px"
    },
    copyInventorData: {
        padding: "20px 0px",
        "& .ant-checkbox-wrapper+.ant-checkbox-wrapper": {
            marginLeft: "0"
        }
    },
    infoErrorMessage: {
        color: "#F00",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        marginBottom: "10px"
    },
    formSelect: {
        display: "flex",
        alignItems: "center",
        gap: "20px",
        "& ant-checkbox-wrapper+.ant-checkbox-wrapper": {
            marginLeft: 0
        }
    },
    formSelectContainer: {
        paddingBottom: "0px",
        borderBottom: "1px solid #D7D7D7"
    },
    inventorsTxts: {
        color: "#000",
        fontSize: "16px",
        fontWeight: 600
    },
    detailsInputTxt: {
        color: "#000",
        fontSize: "18px",
        fontWeight: 700,
        display: "flex",
        flexDirection: "column"
    },
    infoDetailsTxt: {
        color: "#000",
        fontSize: "18px",
        fontWeight: 400,
        display: "flex",
        flexDirection: "column",
        marginLeft: "30px"
    },
    editDelete: {
        display: "flex",
        gap: "20px",
        alignSelf: "flexStart"
    },
    editStyle: {
        width: "20px",
        height: "21.667px"
    },
    deleteStyle: {
        width: "20px",
        height: "22px"
    },
    abstractLine: {
        display: "flex",
        borderBottom: "1px solid #97979733",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: "10px"
    },
    jurisdictionMainForm: {
        padding: "20px 0px",
        "& .MuiFormHelperText-root.Mui-error": {
            color: "#f44336",
            marginLeft: "0px"
        }
    },
    claimsMainBoxStyle: {
        display: "flex",
        gap: "10px"
    },
    resetSaveUploadButton: {
        display: "flex",
        justifyContent: "flex-start",
        gap: "1.5rem",
        margin: "20px 0px",
        "& .MuiBox-root MuiBox-root-174": {
            display: "flex"
        }
    },
    selectSubmitInfor: {
        display: "flex",
        alignItems: "center",
        marginTop: "20px"
    },
    inventorsBox: {
        borderRadius: "8px",
        border: "1px solid #D7D7D7",
        backgroundColor: "#FFF",
        margin: "20px 0px",
        // padding: "20px"
    },
    formSelectMain: {
        borderRadius: "4px",
        border: "1px solid #D7D7D7",
        backgroundColor: "#FFF",
        padding: "20px 20px",
        alignSelf: "center",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "20px 0px"
    },
    toBeSubmittedTxt: {
        color: "#EA0505",
        fontSize: "18px",
        fontWeight: 400,
        marginTop: "20px"
    },
    addDrawingMain: {
        backgroundColor: "#FFF",
        margin: "20px 0px",
        borderRradius: "10px",
        border: "1px solid grey",
        padding: "20px"
    },
    noOfDraw: {
        width: "100%",
        borderBottom: "1px solid #D7D7D7",
        paddingBottom: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    manageDrawingForm: {
        padding: "10px 0px"
    },
    noDrawingText: {
        width: "100%",
        color: "rgba(0, 0, 0, 0.85)",
        fontSize: "24px",
        fontWeight: 700
    },
    pagedrwaingInputFeild: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        gap: "2rem"
    },
    pageFirstInput: {
        display: "flex",
        flexDirection: "column",
        "& .MuiFormHelperText-root.Mui-error": {
            color: "#f44336",
            marginLeft: "0px"
        }
    },
    drwaingInput: {
        display: "flex",
        flexDirection: "column",
        "& .MuiFormHelperText-root.Mui-error": {
            color: "#f44336",
            marginLeft: "0px"
        }
    },
    inventoreButtonheading: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    addremoveDataMain: {
        display: "flex",
        borderRadius: "8px",
        border: "1px solid #D7D7D7",
        backgroundColor: "#FFF",
        padding: "1.3rem",
        flexDirection: "row",
        marginTop: "20px",
        justifyContent: "space-between"
    },
    addPersonalInfo: {
        display: "flex",
        flexDirection: "row"
    },
    addInventorButtonMain: {
        borderRadius: "8px",
        border: "1px solid #D7D7D7",
        backgroundColor: "#FFF",
        marginTop: "20px",
        padding: "20px"
    },
    copyDataTxt: {
        color: "rgba(0, 0, 0, 0.85)",
        fontSize: "24px",
        fontWeight: 700,
        margin: "0px 0px"
    },
    iSymbol: {
        width: "18px",
        height: "18px"
    },
    PrioritiesContainer: {
        padding: "0px 0px",
        "& .MuiFormHelperText-root.Mui-error": {
            color: "#f44336",
            marginLeft: "0px"
        }
    },
    totalPageMessage: {
        color: "#EA0505",
        fontSize: "18px",
        fontWeight: 400,
        margin: "1rem 0rem"
    },
    typeOfApplication: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "10px 0px"
    },
    priotiSymbol: {
        width: "18px",
        height: "18px",
        opacity: "0.5px",
        margin: "0px 15px"
    },
    priotiText: {
        color: "#000",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "normal"
    },
    prioritiesAddButton: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "15px",
        alignItems: "center",
        gap: "4rem",
        marginTop: "15px"
    },
    prioritiesAddButtonApplicant: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "15px",
        alignItems: "center",
        gap: "4rem"
    },
    additionalChargeTxtClaims: {
        color: "#EA0505",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        margin: "0px 0px 0px 0px"
    },
    abstractTitle: {
        color: "rgba(0, 0, 0, 0.85)",
        fontSize: "24px",
        fontWeight: 700
    },
    typeApplicstionText: {
        color: "rgba(0, 0, 0, 0.85)",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 500
    },
    additionalChargeTxt: {
        color: "#EA0505",
        fontSize: "18px",
        fontWeight: 400,
        margin: "10px 0px 0px 0px"
    },
    iSymbolJuric: {
        width: "18px",
        height: "18px",
        opacity: "0.5",
        margin: "0px 10px"
    },
    tooltipHeading: {
        fontSize: "16px",
        fontWeight: 500,
        marginTop: "8px",
        cursor: "pointer",
    },
    juriDictionHeader: {
        display: "flex",
        // alignItems: "center",
        padding: "10px 0px 10px 0px"
    },
    priotiMain: {
        borderRadius: "10px",
        border: "1px solid grey",
        backgroundColor: "#FFF",
        marginTop: "20px",
        padding: "20px",
        "& .MuiFormHelperText-root.Mui-error": {
            color: "#f44336",
            marginLeft: "0px"
        }
    },
    headingStyle: {
        display: "flex",
        alignItems: "center",
        padding: "0px 0px"
    },
    starSign: {
        color: "red",
        marginLeft: "2px",
        padding: "10px 0px"
    },
    formContainerDashbaord: {
        display: "flex",
        margin: "4rem",
        borderRadius: "8px",
        backgroundColor: "blue"
    },
    ToolTipContainer: {
        width: "300px",
        height: "100px",
        color: "white",
        "& .MuiTooltip-tooltip": {
            backgroundColor: "#fff",
            color: "black",
            width: "370px",
            height: "132px",
            border: "1px solid #000",
            borderRadius: "20px"
        },
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
    FormInputContainer: {
        display: "flex",
        flexDirection: "row",
        margin: "3px 0px 6px 0px",
    },
    formHeaderContainer: {
        marginBottom: "15px",
        "& .MuiFormHelperText-root.Mui-error": {
            color: "#f44336",
            marginLeft: "0px"
        }
    },
    profileHeading: {
        fontSize: "18px",
        fontWeight: 500
    },
    astrix: {
        color: "red",
    },
    ModalInputPara: {
        color: "red",
        fontSize: "16px",
    },
    ModalInputButton: {
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
    savedModalContainer: {
        height: "400px",
        width: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        color: "#000",
        flexDirection: "column",
        borderRadius: "8px",
        padding: "20px",
        gap: "10px",
        "@media(max-width:475px)": {
            width: "280px",
            height: "280px",
        },
    },
    savedModalHeading: {
        fontSize: "20px",
        fontWeight: 500,
        "@media(max-width:475px)": {
            fontSize: "16px",
        },
    },
    savedModalPara: {
        fontSize: "14px",
    },
    savedModalButton: {
        backgroundColor: "rgb(22,67,111)",
        backgroundImage:
            "linear-gradient(to bottom right, rgb(22,67,111), rgb(78,109,132))",
        color: "#fff",
        width: "100px",
        height: "35px",
        "&:hover": {
            backgroundColor: "rgb(22,67,111)",
            backgroundImage:
                "linear-gradient(to bottom right, rgb(22,67,111), rgb(78,109,132))",
            color: "#fff",
        },
    },
    failedModalContainer: {
        color: "red",
        height: "380px",
        width: "380px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        flexDirection: "column",
        borderRadius: "8px",
        padding: "20px",
        gap: "10px",
        "@media(max-width:475px)": {
            width: "270px",
            height: "270px",
        },
    },
    tooltipContainer: {
        "& .MuiTooltip-tooltip": {
            backgroundColor: "#fff",
            color: "black",
            width: "370px",
            height: "132px",
            border: "1px solid #000",
            borderRadius: "20px",
        },
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
        content: ""
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
    }
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

const CustomTooltip = withStyles(() => ({
    tooltip: {
        backgroundColor: "rgb(7,51,108)",
        color: "#fff",
        maxWidth: 350,
        fontSize: "10px",
        fontWeight: 700,
        padding: "25px 20px 15px 20px",
        border: "1px solid rgb(7,51,108)",
        borderRadius: "10px",
        "& .MuiTooltip-arrow": {
            color: "rgb(7,51,108)",
            fontSize: "40px",
            width: "42px",
            height: "35px"
        }
    }
}))(Tooltip);

const FormControlInput = styled(FormControlLabel)({
    color: "#000",
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
        color: "#0B336A"
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
// Customizable Area End
