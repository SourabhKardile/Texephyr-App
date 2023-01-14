import * as Font from "expo-font";

async function loadFonts() {
  await Font.loadAsync({
    "ChakraPetch-Bold": require("../.././assets/fonts/ChakraPetch-Bold.ttf"),
  });
  
}

loadFonts();

module.exports = {
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  eventListItem: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 7,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  branchItem: {
    backgroundColor: "#0782F9",
    padding: 2,
    marginVertical: 5,
    marginHorizontal: 30,
    borderRadius: 7,
    width: "70%",
    alignItems: "center",
  },
  eventName: {
    padding: 25,
    fontSize: 30,
    color: "white",
    fontFamily: "ChakraPetch-Bold",
  },
  branchname: {
    fontSize: 25,
    color: "white",
    fontFamily: "ChakraPetch-Bold",
  },
  eventModalView: {
    width: "70%",
    height: "50%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#171717",
  },

  inputContainer: {
    width: "80%",
  },

  input: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginBottom: 30,
    placeholderTextColor: "#fff",
    paddingHorizontal: 15,

    borderRadius: 10,
    marginTop: 5,
    color: "white",
  },
  inputTex: {
    borderBottomColor: "white",

    borderBottomWidth: 1,
    marginTop: 5,
    color: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    width: 270,
  },

  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  button: {
    backgroundColor: "#079779",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },

  buttonText: {
    
    color: "white",
    fontSize: 18,
    fontFamily: "ChakraPetch-Bold",
  },

  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },

  eventRegContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  eventInput: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    width: 200,
    borderColor: "#0782F9",
    borderWidth: 2,
    borderColor: "gray",
  },

  register: {
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 10,
    marginTop: 15,
  },
  modalButton: {
    alignItems: "center",
    backgroundColor: "#079779",
    borderRadius: 5,
    padding: 10,
  },

  getBtnContainer: {
    margin: 5,
    
    backgroundColor: "green",
    borderRadius: 100,
    paddingVertical: 7,
    paddingHorizontal: 7,
  },

  cancelBtnContainer: {
    margin: 5,
    borderRadius: 100,
    backgroundColor: "red",
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 7,
  },

  appButtonText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    fontFamily: "ChakraPetch-Bold",
  },

  item: {
    backgroundColor: "#0d0907",
    padding: 20,
    borderRadius: 7,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 32,
    color: "#0782F9",
    fontFamily: "ChakraPetch-Bold",
  },
  EventRegistername: {
    fontSize: 20,
    color: "white",
    fontFamily: "ChakraPetch-Bold",
    textTransform: "uppercase",
  },
  finalPrice: {
    fontSize: 32,
    color: "black",
    alignSelf: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: "100%",
    height: "100%",
  },
  modalView: {
    width: "90%",
    height: "auto",
    margin: 20,
    backgroundColor: "#232323",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalAccountView: {
    width: 280,
    height: 'auto',
    margin: 20,
    backgroundColor: "#171717",
    borderRadius: 20,
    padding: 10,
    paddingRight: 1,
    display: "flex",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalGroupView: {
    width: 400,
    height: 400,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    paddingRight: 1,
    display: "flex",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  card: {
    padding: 15,
    backgroundColor: "#232323",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  blur: {
    color: "#000",
    backgroundColor: "#000",
    opacity: 0.5,
  },
  normal: {
    opacity: 1,
  },
  containerMyStatus: {
    flex: 1,
  },
  imageMyStatus: {
    flex: 1,
    justifyContent: "flex-start",
  },
  textMyStatusMoney: {
    fontSize: 25,
    marginTop: "25%",
    marginLeft: 40,
    color: "#fff",
    fontFamily: "ChakraPetch-Bold",
  },
  grpTextMember:{
    color:'#fff', 
    marginTop:15
  },
  grpText:{
    color:'#079779', 
    marginTop:15
  },
  nextButton: {
    backgroundColor: "#079779",
    width: "90%",
    padding: 1,
    borderRadius: 10,
    marginTop:10,
    marginBottom:20,
    color:'#fff',
    alignItems:'center',
  },
  nextBtn:{
    color:'#fff',
    fontFamily: "ChakraPetch-Bold",
    fontSize:20,
    letterSpacing:2,
    textTransform: "uppercase",
  },
  cartText:{
    color:'#fff',
    fontFamily: "ChakraPetch-Bold",
  },
  cartNames:{
    fontSize:20, textTransform:'uppercase', color:'#fff', fontFamily:'ChakraPetch-Bold'
  },
  payment:{
    fontSize:20,
     color: 'white',
    fontFamily:'ChakraPetch-Bold',
    letterSpacing:1
  },
  itemPayment:{
    backgroundColor: "#171717",
    padding: 20,
    borderRadius: 7,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  paymentText:{
    marginTop:30,
    marginLeft:40,
    color:'#fff',
    fontSize:25,
    textTransform:'uppercase',
    fontFamily:'ChakraPetch-Bold',
  },
  textRecords:{
    color:'white',
    fontSize:30,
    paddingLeft:20,
    fontFamily:'ChakraPetch-Bold',
    textTransform:'uppercase',
    letterSpacing:1,
    
},
boxRecords:{
     height: 100,
      marginTop:25,
      marginHorizontal:10,
       backgroundColor:'#4966f8',
        paddingTop:50,
        borderRadius:20,
        backgroundColor:'#171717',
        borderBottomColor: '#079779',
        borderBottomWidth: 2,
        
}
};
