import React from 'react';

import { ContainerHeader, Content, Profile } from './styles';

function Header() {
  return (
    <ContainerHeader>
      <Content>
        <nav>
          <h1>LibStore</h1>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Administrador</strong>
              <h1>Meu Perfil</h1>
            </div>
            <img
              src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
              alt="Administrador"
            />
          </Profile>
        </aside>
      </Content>
    </ContainerHeader>
  );
}

export default Header;
