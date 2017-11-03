export const assetTypeList = [
    '--Select Type--',
    'Equity',
    'Fixed Income',
    'Real Estate',
    'OTC Derivative',
    'Commodity',
    'Alternative'
]
export const subTypesList = {
    '--Select Type--': {
        subTypes: ['--Select Type--']
    },
    'Equity': {
        subTypes: ['--Select Type--', 'Nano Cap(Penny)', 'Micro Cap']
    },
    'Fixed Income': {
        subTypes: ['--Select Type--', 'Convertible Bonds', 'Warrants']
    },
    'Real Estate': {
        subTypes: [
            '--Select Type--',
            'Multi-Family/Apartment Building',
            'Retail/Independent Building',
            'Commercial Building',
            'Industrial Building',
            'Custom/User-Defined'
        ]
    },
    'OTC Derivative': {
        subTypes: [
            '--Select Type--',
            'Interest Rate Derivative',
            'Forex Derivative',
            'Equity Derivative',
            'Fixed Income Derivative',
            'Credit Derivative',
            'Commodity Derivative'
        ]
    },
    'Commodity': {
        subTypes: ['--Select Type--', 'Precious Metals', 'Coal Blocks', 'Custom/User-Defined']
    },
    'Alternative': {
        subTypes: ['--Select Type--', 'Art/Paintings', 'Antiques', 'Wine', 'Yatch', 'Custom/User-Defined']
    },


}
export const assetsList = [


    {
        assetType: 'Equity', securityID: 'EQUI1234', securityType: 'Nano Cap(Penny)', companyName: 'HCL', address: 'Pune'
    },
    {
        assetType: 'Equity', securityID: 'EQUI1235', securityType: 'Micro Cap', companyName: 'TCS', address: 'Hyderabad'
    },
    {
        assetType: 'Fixed Income', securityID: 'FXIN1234', securityType: 'Convertible Bonds', companyName: 'HCL', address: 'Pune'
    },
    {
        assetType: 'Fixed Income', securityID: 'FXIN1235', securityType: 'Warrants', companyName: 'TCS', address: 'Hyderabad'
    },
    {
        assetType: 'Real Estate', securityID: 'REAL1234', securityType: 'Multi-Family/Apartment Building', companyName: 'HCL', address: 'Pune'
    },
    {
        assetType: 'Real Estate', securityID: 'REAL1235', securityType: 'Retail/Independent Building', companyName: 'TCS', address: 'Hyderabad'
    },
    {
        assetType: 'Real Estate', securityID: 'REAL1236', securityType: 'Commercial Building', companyName: 'HCL', address: 'Pune'
    },
    {
        assetType: 'Real Estate', securityID: 'REAL1237', securityType: 'Industrial Building', companyName: 'HCL', address: 'Pune'
    },
    {
        assetType: 'OTC Derivative', securityID: 'OTCD1234', securityType: 'Interest Rate Derivative', companyName: 'HCL', address: 'Pune'
    },
    {
        assetType: 'OTC Derivative', securityID: 'OTCD1235', securityType: 'Forex Derivative', companyName: 'TCS', address: 'Hyderabad'
    },
    {
        assetType: 'OTC Derivative', securityID: 'OTCD1236', securityType: 'Equity Derivative', companyName: 'HCL', address: 'Pune'
    },
    {
        assetType: 'OTC Derivative', securityID: 'OTCD1237', securityType: 'Fixed Income Derivative', companyName: 'HCL', address: 'Pune'
    },
    {
        assetType: 'OTC Derivative', securityID: 'OTCD1238', securityType: 'Credit Derivative', companyName: 'HCL', address: 'Pune'
    },
    {
        assetType: 'OTC Derivative', securityID: 'OTCD1239', securityType: 'Commodity Derivative', companyName: 'HCL', address: 'Pune'
    },
    {
        assetType: 'Alternative', securityID: 'ALTE1234', securityType: 'Art/Paintings', companyName: 'HCL', address: 'Pune'
    },
    {
        assetType: 'Alternative', securityID: 'ALTE1235', securityType: 'Antiques', companyName: 'TCS', address: 'Hyderabad'
    },
    {
        assetType: 'Alternative', securityID: 'ALTE1235', securityType: 'Wine', companyName: 'TCS', address: 'Hyderabad'
    },
    {
        assetType: 'Alternative', securityID: 'ALTE1235', securityType: 'Yatch', companyName: 'TCS', address: 'Hyderabad'
    }

]




export const mpAssetList = [{
    assetID: 'ASST1234', assetName: 'HCL', assetType: 'Equity', securityType: 'Nano Cap(Penny)', MarketPrice: 600
},
{
    assetID: 'ASST1234', assetName: 'HCL', assetType: 'Equity', securityType: 'Micro Cap', MarketPrice: 600
},
{
    assetID: 'ASST1234', assetName: 'HCL', assetType: 'Fixed Income', securityType: 'Convertible Bonds', MarketPrice: 600
},
{
    assetID: 'ASST1234', assetName: 'HCL', assetType: 'Fixed Income', securityType: 'Warrants', MarketPrice: 600
},
{
    assetID: 'ASST1234', assetName: 'HCL', assetType: 'Real Estate', securityType: 'Industrial Building', MarketPrice: 600
},
{
    assetID: 'ASST1234', assetName: 'HCL', assetType: 'Real Estate', securityType: 'Commercial Building', MarketPrice: 600
},
{
    assetID: 'ASST1234', assetName: 'HCL', assetType: 'OTC Derivative', securityType: 'Commodity Derivative', MarketPrice: 600
},
{
    assetID: 'ASST1234', assetName: 'HCL', assetType: 'OTC Derivative', securityType: 'Forex Derivative', MarketPrice: 600
},
{
    assetID: 'ASST1234', assetName: 'HCL', assetType: 'OTC Derivative', securityType: 'Fixed Income Derivative', MarketPrice: 600
}, {
    assetID: 'ASST1234', assetName: 'HCL', assetType: 'Alternative', securityType: 'Antiques', MarketPrice: 600
}, {
    assetID: 'ASST1234', assetName: 'HCL', assetType: 'Alternative', securityType: 'Art/Paintings', MarketPrice: 600
}
]

export const sellersList = [{
    sellerID: 'ASST1234', acquisitionPrice: 500, availableQuantity: 1000
},
{
    sellerID: 'ASST1234', acquisitionPrice: 500, availableQuantity: 1000
},
{
    sellerID: 'ASST1234', acquisitionPrice: 500, availableQuantity: 1000
},
{
    sellerID: 'ASST1234', acquisitionPrice: 500, availableQuantity: 1000
},
{
    sellerID: 'ASST1234', acquisitionPrice: 500, availableQuantity: 1000
},
{
    sellerID: 'ASST1234', acquisitionPrice: 500, availableQuantity: 1000
},
{
    sellerID: 'ASST1234', acquisitionPrice: 500, availableQuantity: 1000
}
]

export const usersList = [
    { logID: "ANKI1234", pwd: "password", isAdmin: false },
    { logID: "SATH1234", pwd: "password", isAdmin: false },
    { logID: "ANTR1234", pwd: "password", isAdmin: false },
    { logID: "KAUS1234", pwd: "password", isAdmin: false },
    { logID: "ADMIN123", pwd: "12345", isAdmin: true },
    { logID: "MANOJ123", pwd: "GETLOSTA", isAdmin: false }
]

export const AdminExplorerList = [
    {BlockNumber: 1, TxId: '0x2342142431323543a87a8789a789a798', TimeStamp: Date.now()},
    {BlockNumber: 2, TxId: '0x2342142431323543a87a8789a789a798', TimeStamp: Date.now()},
    {BlockNumber: 3, TxId: '0x2342142431323543a87a8789a789a798', TimeStamp: Date.now()},
    {BlockNumber: 4, TxId: '0x2342142431323543a87a8789a789a798', TimeStamp: Date.now()},
    {BlockNumber: 5, TxId: '0x2342142431323543a87a8789a789a798', TimeStamp: Date.now()},
    {BlockNumber: 6, TxId: '0x2342142431323543a87a8789a789a798', TimeStamp: Date.now()},
    {BlockNumber: 7, TxId: '0x2342142431323543a87a8789a789a798', TimeStamp: Date.now()},
    {BlockNumber: 8, TxId: '0x2342142431323543a87a8789a789a798', TimeStamp: Date.now()},
    {BlockNumber: 9, TxId: '0x2342142431323543a87a8789a789a798', TimeStamp: Date.now()},
    {BlockNumber: 10, TxId: '0x2342142431323543a87a8789a789a798', TimeStamp: Date.now()},
    {BlockNumber: 11, TxId: '0x2342142431323543a87a8789a789a798', TimeStamp: Date.now()},
    {BlockNumber: 12, TxId: '0x2342142431323543a87a8789a789a798', TimeStamp: Date.now()},
    {BlockNumber: 13, TxId: '0x2342142431323543a87a8789a789a798', TimeStamp: Date.now()},
    {BlockNumber: 14, TxId: '0x2342142431323543a87a8789a789a798', TimeStamp: Date.now()},
    {BlockNumber: 15, TxId: '0x2342142431323543a87a8789a789a798', TimeStamp: Date.now()},
]

import axios from 'axios'


export function fetchData(url) {
	return function(dispatch) {
		dispatch(requestData());
		return axios({
			url: url,
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		})
			.then(function(response) {
				dispatch(receiveData(response.data));
			})
			.catch(function(response){
				dispatch(receiveError(response.data));
				dispatch(pushState(null,'/error'));
			})
	}
};