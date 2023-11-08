
import auditeurImage from '../assets/5.png'; 
import React from 'react';

function AuditeurAchatsForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fournisseur = e.target.fournisseur.value;
    const produit = e.target.produit.value;
    const quantite = e.target.quantite.value;
    const prix = e.target.prix.value;

    console.log('Formulaire soumis avec les données :', {
      fournisseur,
      produit,
      quantite,
      prix,
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col" style={{marginTop: '80px' , marginLeft:'0px'}} >
          <img 
            src={auditeurImage}
            alt="Auditeur"
            className="img-fluid"
            style={{width:'1000px'}}
          />
        </div>
        <div className="col-md-8">
          <form onSubmit={handleSubmit} className="form" style={{ marginTop: '80px' }} data-sb-form-api-token="API_TOKEN">
            <div className="form-floating mb-3" >
              <label htmlFor="fournisseur">Nom du fournisseur</label>
              <input
                className="form-control"
                id="fournisseur"
                type="text"
                name="fournisseur"
                required
              />
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="produit">Nom du produit acheté</label>
              <input
                className="form-control"
                id="produit"
                type="text"
                name="produit"
                required
              />
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="quantite">Quantité achetée</label>
              <input
                className="form-control"
                id="quantite"
                type="number"
                name="quantite"
                required
              />
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="prix">Prix unitaire</label>
              <input
                className="form-control"
                id="prix"
                type="number"
                name="prix"
                required
              />
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="prix total">Prix Total</label>
              <input
                className="form-control"
                id="prix total"
                type="number"
                name="prix total"
                required
              />
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="TVA">TVA</label>
              <input
                className="form-control"
                id="TVA"
                type="number"
                name="TVA"
                required
              />
            </div><br></br>
            <button className="btn btn-primary btn-lg" type="submit">
              TEST
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuditeurAchatsForm;
