import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContext: {
    width: '100%', // ocupa 100% de largura da tela,
    height: '100%', //ocupa 100% de altura da tela
    justifyContent: 'space-around',
    bottom: 0, //pra ir até o final da tela
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 15,
  },
  form: {
    width: '100%',
    height: 'auto', //conforme novos componentes são adicionados, ele automatiza o processo de posicionamento
    marginTop: 30,
    padding: 10,
  },
  formLabel: {
    color: '#000000',
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#f6f6f6',
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#FF0043',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margintTop: 30,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: '#ffffff',
  },
  errorMessage: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
    paddingLeft: 20,
  },
});

export default styles;
