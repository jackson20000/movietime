const { StyleSheet } = require("react-native");

export const style = StyleSheet.create({
    loginbtn: {
        backgroundColor: '#fb5558',
        width: '100%',
        borderRadius: 30,
        elevation: 5
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 50
    },
    input: {
        backgroundColor: '#ededed',
        width: '100%',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 8,
        marginVertical: 10
    },
    signup: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25
    },
    heading: {
        color: '#363636',
        fontSize: 27,
        marginBottom: 10,
        fontFamily: 'Roboto'
    },
    fbbutton: {
        width: '45%',
        padding: 13,
        backgroundColor: '#3D5B99',
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    googlebtn: {
        width: '45%',
        padding: 13,
        backgroundColor: 'white',
        borderRadius: 25,
        elevation: 4,
        flexDirection: 'row',
        justifyContent: 'center'
    }
});