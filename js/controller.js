let total=0;
let priceFruit = 10;
let priceCream = 8;
let priceSpecial = 18;
let count_oreo=0;
let count_fresa_leche=0;
let count_fresa_queso=0;
let count_mamey=0;
let count_queso_zarzamora=0;
let count_pina_coco=0;
let count_arroz_leche=0;
let count_cafe=0;
let count_chocolate_galleta=0;
let count_pay_limon=0;
let count_limon=0;
let count_nuez=0;
let count_nuez_entera=0;
let count_pinon=0;
let count_pistache=0;
let count_yogurt=0;
let count_coco=0;
let count_vainilla=0;
let count_chicle=0;
let count_mango=0;
let count_guana=0;
let count_coco_fruta=0;
let count_fresa_fruta=0;
let count_pina_fruta=0;

function addQty(product,qty){
        switch(product){
            case 'oreo':
                if(qty=='+'){
                    count_oreo = count_oreo + 1;
                    total = total + priceCream;
                }else{
                    count_oreo = count_oreo - 1;
                    total = total - priceCream;
                }
                document.getElementById('btn-oreo').textContent = count_oreo;
            break;
            case 'fresa-leche':
                if(qty=='+'){
                    count_fresa_leche = count_fresa_leche + 1;
                    total = total + priceCream;
                }else{
                    count_fresa_leche = count_fresa_leche - 1;
                    total = total - priceCream;
                }
                document.getElementById('btn-fresa-leche').textContent = count_fresa_leche;
            break;
            case 'fresa-queso':
                if(qty=='+'){
                    count_fresa_queso = count_fresa_queso + 1;
                    total = total + priceCream;
                }else{
                    count_fresa_queso = count_fresa_queso - 1;
                    total = total - priceCream;
                }
                document.getElementById('btn-fresa-queso').textContent = count_fresa_queso;
            break;
            case 'mamey':
                if(qty=='+'){
                    count_mamey = count_mamey + 1;
                    total = total + priceCream;
                }else{
                    count_mamey = count_mamey - 1;
                    total = total - priceCream;
                }
                document.getElementById('btn-mamey').textContent = count_mamey;
            break;                        
            case 'queso-zarzamora':
                if(qty=='+'){
                    count_queso_zarzamora = count_queso_zarzamora + 1;
                    total = total + priceCream;
                }else{
                    count_queso_zarzamora = count_queso_zarzamora - 1;
                    total = total - priceCream;
                }
                document.getElementById('btn-queso-zarzamora').textContent = count_queso_zarzamora;
            break; 
            case 'pina-coco':
                if(qty=='+'){
                    count_pina_coco = count_pina_coco + 1;
                    total = total + priceCream;
                }else{
                    count_pina_coco = count_pina_coco - 1;
                    total = total - priceCream;
                }
                document.getElementById('btn-pina-coco').textContent = count_pina_coco;
            break;                                    
            case 'arroz-leche':
                if(qty=='+'){
                    count_arroz_leche = count_arroz_leche + 1;
                    total = total + priceCream;
                }else{
                    count_arroz_leche = count_arroz_leche - 1;
                    total = total - priceCream;
                }
                document.getElementById('btn-arroz-leche').textContent = count_arroz_leche;
            break;
            case 'cafe':
                if(qty=='+'){
                    count_cafe = count_cafe + 1;
                    total = total + priceCream;
                }else{
                    count_cafe = count_cafe - 1;
                    total = total - priceCream;
                }
                document.getElementById('btn-cafe').textContent = count_cafe;
            break;   
            case 'chocolate-galleta':
                if(qty=='+'){
                    count_chocolate_galleta = count_chocolate_galleta + 1;
                    total = total + priceCream;
                }else{
                    count_chocolate_galleta = count_chocolate_galleta - 1;
                    total = total - priceCream;
                }
                document.getElementById('btn-chocolate-galleta').textContent = count_chocolate_galleta;
            break; 
            case 'pay-limon':
                if(qty=='+'){
                    count_pay_limon = count_pay_limon + 1;
                    total = total + priceCream;
                }else{
                    count_pay_limon = count_pay_limon - 1;
                    total = total - priceCream;
                }
                document.getElementById('btn-pay-limon').textContent = count_pay_limon;
            break;
            case 'limon':
                if(qty=='+'){
                    count_limon = count_limon + 1;
                    total = total + priceFruit;
                }else{
                    count_limon = count_limon - 1;
                    total = total - priceFruit;
                }
                document.getElementById('btn-limon').textContent = count_limon;
            break;            
            case 'nuez':
                if(qty=='+'){
                    count_nuez = count_nuez + 1;
                    total = total + priceCream;
                }else{
                    count_nuez = count_nuez - 1;
                    total = total - priceCream;
                }
                document.getElementById('btn-nuez').textContent = count_nuez;
            break;   
            case 'mango':
                if(qty=='+'){
                    count_mango = count_mango + 1;
                    total = total + priceFruit;
                }else{
                    count_mango = count_mango - 1;
                    total = total - priceFruit;
                }
                document.getElementById('btn-mango').textContent = count_mango;
            break;
            case 'guana':
                if(qty=='+'){
                    count_guana = count_guana + 1;
                    total = total + priceFruit;
                }else{
                    count_guana = count_guana - 1;
                    total = total - priceFruit;
                }
                document.getElementById('btn-guana').textContent = count_guana;
            break;     
            case 'coco-fruta':
                if(qty=='+'){
                    count_coco_fruta = count_coco_fruta + 1;
                    total = total + priceFruit;
                }else{
                    count_coco_fruta = count_coco_fruta - 1;
                    total = total - priceFruit;
                }
                document.getElementById('btn-coco-fruta').textContent = count_coco_fruta;
            break;                        
            case 'fresa-fruta':
                if(qty=='+'){
                    count_fresa_fruta = count_fresa_fruta + 1;
                    total = total + priceFruit;
                }else{
                    count_fresa_fruta = count_fresa_fruta - 1;
                    total = total - priceFruit;
                }
                document.getElementById('btn-fresa-fruta').textContent = count_fresa_fruta;
            break;                                    
            case 'pina-fruta':
                if(qty=='+'){
                    count_pina_fruta = count_pina_fruta + 1;
                    total = total + priceFruit;
                }else{
                    count_pina_fruta = count_pina_fruta - 1;
                    total = total - priceFruit;
                }
                document.getElementById('btn-pina-fruta').textContent = count_pina_fruta;
            break;                                                
            case 'yogurt':
                if(qty=='+'){
                    count_yogurt = count_yogurt + 1;
                    total = total + priceCream;
                }else{
                    count_yogurt = count_yogurt - 1;
                    total = total - priceCream;
                }
                document.getElementById('btn-yogurt').textContent = count_yogurt;
            break;            
            case 'coco':
                if(qty=='+'){
                    count_coco = count_coco + 1;
                    total = total + priceCream;
                }else{
                    count_coco = count_coco - 1;
                    total = total - priceCream;
                }
                document.getElementById('btn-coco').textContent = count_coco;
            break;
            case 'vainilla':
                if(qty=='+'){
                    count_vainilla = count_vainilla + 1;
                    total = total + priceCream;
                }else{
                    count_vainilla = count_vainilla - 1;
                    total = total - priceCream;
                }
                document.getElementById('btn-vainilla').textContent = count_vainilla;
            break;
            case 'chicle':
                if(qty=='+'){
                    count_chicle = count_chicle + 1;
                    total = total + priceCream;
                }else{
                    count_chicle = count_chicle - 1;
                    total = total - priceCream;
                }
                document.getElementById('btn-chicle').textContent = count_chicle;
            break;                                    
            /////////////cambia el precio a 30
            case 'nuez-entera':
                if(qty=='+'){
                    count_nuez_entera = count_nuez_entera + 1;
                    total = total + priceSpecial;
                }else{
                    count_nuez_entera = count_nuez_entera - 1;
                    total = total - priceSpecial;
                }
                document.getElementById('btn-nuez-entera').textContent = count_nuez_entera;
            break;                                                   
            case 'pinon':
                if(qty=='+'){
                    count_pinon = count_pinon + 1;
                    total = total + priceSpecial;
                }else{
                    count_pinon = count_pinon - 1;
                    total = total - priceSpecial;
                }
                document.getElementById('btn-pinon').textContent = count_pinon;
            break;                                                               
            case 'pistache':
                if(qty=='+'){
                    count_pistache = count_pistache + 1;
                    total = total + priceSpecial;
                }else{
                    count_pistache = count_pistache - 1;
                    total = total - priceSpecial;
                }
                document.getElementById('btn-pistache').textContent = count_pistache;
            break;                                                               
        }
        document.getElementById('labelTitle').textContent = "$"+total+".00";
}

function sendMessage(id){
    
    if(total <= 200){
        alert("Recuerda que el envio es gratis a partir de $200. Gracias por tu comprensión");
    }
    const resultado = "https://api.whatsapp.com/send?phone=+522462333225&text=" + buildMessage();
    document.getElementById(id).href = resultado;
        
}

function buildMessage(){

    textWhats = "Hola%20este%20es%20mi%20pedido%20";
    if(count_oreo > 0)
        textWhats = textWhats + count_oreo+"%20"+"oreo ";
    if(count_fresa_leche > 0)
        textWhats = textWhats + count_fresa_leche+"%20"+"fresa-leche ";
    if(count_fresa_queso > 0)
        textWhats = textWhats + count_fresa_queso+"%20"+"fresa-queso ";
    if(count_mamey > 0)
        textWhats = textWhats + count_mamey+"%20"+"mamey ";        
    if(count_queso_zarzamora > 0)
        textWhats = textWhats + count_queso_zarzamora+"%20"+"queso-zarzamora ";        
    if(count_pina_coco > 0)
        textWhats = textWhats + count_pina_coco+"%20"+"pina-coco ";        
    if(count_arroz_leche > 0)
        textWhats = textWhats + count_arroz_leche+"%20"+"arroz-leche ";        
    if(count_cafe > 0)
        textWhats = textWhats + count_cafe+"%20"+"cafe ";        
    if(count_chocolate_galleta > 0)
        textWhats = textWhats + count_chocolate_galleta+"%20"+"choco-galleta ";        
    if(count_pay_limon > 0)
        textWhats = textWhats + count_pay_limon+"%20"+"pay-limon ";                
    if(count_nuez > 0)
        textWhats = textWhats + count_nuez+"%20"+"nuez ";                
    if(count_mango > 0)
        textWhats = textWhats + count_mango+"%20"+"mango-chile ";                        
    if(count_nuez_entera > 0)
        textWhats = textWhats + count_nuez_entera+"%20"+"nuez-entera ";             
    if(count_pinon > 0)
        textWhats = textWhats + count_pinon+"%20"+"pinon ";                   
    if(count_pistache > 0)
        textWhats = textWhats + count_pistache+"%20"+"pistache ";
    if(count_yogurt > 0)
        textWhats = textWhats + count_yogurt+"%20"+"yogurt ";
    if(count_coco > 0)
        textWhats = textWhats + count_coco+"%20"+"coco ";                    
    if(count_vainilla > 0)
        textWhats = textWhats + count_vainilla+"%20"+"vainilla ";
    if(count_chicle > 0)
        textWhats = textWhats + count_chicle+"%20"+"chicle ";
    if(count_guana > 0)
        textWhats = textWhats + count_guana+"%20"+"guanabana ";                                                           
    if(count_coco_fruta > 0)
        textWhats = textWhats + count_coco_fruta+"%20"+"coco-fruta ";                                                           
    if(count_fresa_fruta > 0)
        textWhats = textWhats + count_fresa_fruta+"%20"+"fresa-fruta ";
    if(count_pina_fruta > 0)
        textWhats = textWhats + count_pina_fruta+"%20"+"pina-chile ";                                                                           
    if(count_limon > 0)
        textWhats = textWhats + count_limon+"%20"+"limon ";

    textWhats=textWhats+"Total%20"+total;

    return textWhats;
}
