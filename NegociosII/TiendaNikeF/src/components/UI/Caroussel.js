import classes from "./Caroussel.module.css";
import ProductCard from "./ProductCard";
const Caroussel = (props) => {
  return (
    <div className={classes.caroussel}>
      <ProductCard url="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ebcb3543-8068-470a-b64b-4c1044824bbf/calzado-force-1-toggle-se-89gJWj.png"></ProductCard>
      <ProductCard url="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/92f26be5-4b91-453c-b858-7e9867fe07b5/calzado-e-infantil-force-1-toggle-se-w7S53B.png"></ProductCard>
      <ProductCard url="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/65092870-fcd9-449a-be5b-c0082f07de07/calzado-para-flex-runner-2-lil-whc1SG.png"></ProductCard>
      <ProductCard url="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/41044a32-1316-4a7f-98c2-df378bd064a8/calzado-e-infantil-team-hustle-500-10-lil-3hBpdn.png"></ProductCard>
      <ProductCard url="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8070d29d-751c-44ea-a21e-9597e157107c/calzado-e-infantil-flex-runner-2-lil-dpmc6G.png"></ProductCard>
      <ProductCard url="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ad7aabd7-7201-4b40-8eff-a10cdb3edd29/calzado-talla-peque%C3%B1a-flex-advance-se-MQmhz9.png"></ProductCard>
      <ProductCard url="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/19f13abc-2e43-45da-b5e8-5c66276d2128/calzado-e-infantil-flex-advance-se-MH2R6k.png"></ProductCard>
      <ProductCard url="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/533c59d2-f820-46bd-89f5-0ec824f560ae/calzado-e-infantil-air-max-90-toggle-se-Nh5R9k.png"></ProductCard>
      <ProductCard url="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/982efb55-d253-449a-9fcf-2c538cf583b8/calzado-air-max-90-toggle-se-14dWhF.png"></ProductCard>
    </div>
  );
};

export default Caroussel;
