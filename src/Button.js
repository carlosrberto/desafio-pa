import React from 'react';

export default ({ status, onClick }) => <button onClick={onClick}>{status ? 'Carregando' : 'Carregar'}</button>;
