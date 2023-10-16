import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidBadge } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "50px",
    width: "100%"
  })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({
    padding: "10px 0"
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none"
  })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
`;

const Input = styled.input`
  border: none;
  ${mobile({
    width: "50px"
  })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "25px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: "2", justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ marginLeft: "3px", fontSize: "12px" })}
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <AiOutlineSearch
              style={{ color: "gray", fontsize: 16 }}
            ></AiOutlineSearch>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>JustBuy</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <BiSolidBadge badgeContent={4} color="secondary">
              <AiOutlineShoppingCart></AiOutlineShoppingCart>
            </BiSolidBadge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
