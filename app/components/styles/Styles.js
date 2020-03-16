import { StyleSheet, Platform } from "react-native";
export default StyleSheet.create({
  headerContainer: {
    padding: 10
  },
  headerText: {
    color: "black",
    fontSize: 20,
    alignSelf: 'center',
    fontFamily: 'sans-serif',
    fontWeight: "200"
  },

  contentsContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    padding: 10
  },

  inputContainer: {
    flex: 2.5,
    justifyContent: "space-between",
    borderBottomWidth: 0.5
  },

  resultText: {
    textAlign:'center',
    ...Platform.select({
      android:{
        paddingBottom:12
      }
    })
    
  },
  textStyle: {
    color: "black",
    fontSize: 20,
    ...Platform.select({
      ios:{
        height: 40
      }
    })
  },

  iconStyle: {
    width:30,
    height:30
  },

  iconContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-around'
  },
  
  pickerStyle: {
    ...Platform.select({
      ios:{
        height: 120
      }
    })
  },

  textInputContainerIOS:{
    ...Platform.select({
      ios:{
        marginTop:10,
        borderWidth:1,
        borderColor:'black'
      }
    })
    
  },

  card: {
    margin: 5,
    paddingBottom: 25,
    borderWidth: 0.1,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  }
  
});
