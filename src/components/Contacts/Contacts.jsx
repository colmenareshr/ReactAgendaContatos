import styled from 'styled-components';

export default function Contacts({ nome, email, telefone }) {
  return (
    <>
      <tbody>
        <tr>
          <td>{nome}</td>
          <td>{email}</td>
          <td>{telefone}</td>
        </tr>
      </tbody>
    </>
  );
}

const TableContainer = styled.table`
  width: 100%;
  max-width: 1100px;
  display: table;
  margin-top: 1rem;
  table-layout: fixed;
  text-align: left;
  border-collapse: collapse;

  th {
    padding: 0.5rem 0;
    border-bottom: 1px solid #f1f3f4;
  }

  tbody {
    &:hover {
      margin-top: 0.3rem;
      border-radius: 5px;
      box-shadow: 0 1px 25px rgb(143 170 141 / 35%);
    }
  }
  td {
    padding: 2rem 0.3rem;
    border-bottom: 1px solid #f1f3f4;
  }
`;
