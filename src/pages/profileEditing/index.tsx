import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { EditUserForm, PersonalInformation } from './components';
import { Button } from 'styles';
import { userSelector } from 'redux/selectors';

const InfoContainer = styled.div`
  margin: 1em auto;
  text-align: center;
`;

export const ProfileEditing: React.FC = () => {
  const user = useSelector(userSelector);

  const [isEdit, setIsEdit] = useState(false);

  return (
    <InfoContainer>
      {user && (
        <div>
          {isEdit ? (
            <EditUserForm user={user} setIsEdit={setIsEdit} />
          ) : (
            <>
              <PersonalInformation user={user} />
              <Button onClick={() => setIsEdit(true)}>Edit profile</Button>
            </>
          )}
        </div>
      )}
    </InfoContainer>
  );
};
