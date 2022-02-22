import { Section, Title } from "./Section.styled";
import PropTypes from "prop-types";

export default function SectionTitle({ title, children }) {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
