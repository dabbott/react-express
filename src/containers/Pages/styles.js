const backgroundImage = require('./background.png')

export default {
  title: {
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 100,
  },

  banner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 400,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
  },

  container: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    minHeight: 0,
  },

  content: {
    flex: '1 1 auto',
    paddingTop: 400,
    overflowY: 'auto',
    zIndex: 1,
    minWidth: 0,
    minHeight: 0,
    // backgroundColor: 'white',
  },

  scroller: {
    // boxShadow: '0 0 100px rgba(0,0,0,0.05)',
    borderTop: '1px solid rgba(220,220,220,0.5)',
    backgroundColor: 'white',
    padding: '40px 40px',
  },

  well: {
    padding: '20px 20px',
  },

  h3: {
    fontSize: 20,
    fontWeight: 300,
    marginTop: 15,
    marginBottom: 15,
  },

  h4: {
    fontSize: 14,
    fontWeight: 500,
    marginTop: 35,
    marginBottom: 15,
  },

  p: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '22px',
    marginBottom: 15
  },

  cmHeaderCode: {
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.8)',
  },
}
