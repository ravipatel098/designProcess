import CrudDataController from "./CrudDataController";

export default class CrudData extends CrudDataController {
    constructor(props: any) {
        super(props);
        this.state = {
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
            applicantData: []
        };
    }


    render() {
        const {
            items,
            applicstionNumber,
            applicantName,
            address,
            pincode,
            townCityDisctrict,
            stateUnionTeratiry,
            country
        }: any = this.state;
        const { addInfoValue }: any = this.state

        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px"
            }}>
                <form
                    onSubmit={() => this.handleSubmit}
                >
                    <div>Application number</div>
                    <input
                        name="Application number"
                        type="text"
                        style={{ width: "100%", height: "20px" }}
                        required={true}
                        onChange={this.handleInputChange} />
                    <div>Applicant Name</div>
                    <input
                        name="Applicant Name"
                        type="text"
                        style={{ width: "100%", height: "20px" }}
                        required={true}
                        onChange={this.handleInputChange} />
                    <div>Address</div>
                    <input
                        name="Address"
                        type="text"
                        style={{ width: "100%", height: "20px" }}
                        required={true}
                        onChange={this.handleInputChange} />
                    <div>Pincode</div>
                    <input
                        name="Pincode"
                        type="text"
                        style={{ width: "100%", height: "20px" }}
                        required={true}
                        onChange={this.handleInputChange} />
                    <div>Town/City/Disctrict</div>
                    <input
                        name="Town/City/Disctrict"
                        type="text"
                        style={{ width: "100%", height: "20px" }}
                        required={true}
                        onChange={this.handleInputChange} />
                    <div>State/Union/Teratary</div>
                    <input
                        name="State/Union/Teratary"
                        type="text"
                        style={{ width: "100%", height: "20px" }}
                        required={true}
                        onChange={this.handleInputChange} />
                    <div>Country</div>
                    <input
                        name="Country"
                        type="text"
                        style={{ width: "100%", height: "20px" }}
                        required={true}
                        onChange={this.handleInputChange} />
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {items.map((item: any, index: any) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => this.handleDeleteItem(index)}>Delete</button>
                        </li>
                    ))}
                </ul>

                <div style={{
                    marginTop: "40px"
                }}>
                    {addInfoValue.map((item: any) => {
                        <>{item.value}</>
                    })}
                </div>
            </div>
        );
    }
}
