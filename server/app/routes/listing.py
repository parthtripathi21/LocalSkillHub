from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.models.listing import Listing
from app.schemas.listing import (
    ListingCreate,
    ListingUpdate,
    ListingResponse,
)

router = APIRouter(prefix="/listings", tags=["Listings"])


# GET ALL
@router.get("/", response_model=list[ListingResponse])
def get_listings(db: Session = Depends(get_db)):
    return db.query(Listing).all()

# GET ONE
@router.get("/{listing_id}", response_model=ListingResponse)
def get_listing(
    listing_id: int,
    db: Session = Depends(get_db),
):
    listing = (
        db.query(Listing)
        .filter(Listing.id == listing_id)
        .first()
    )

    if not listing:
        raise HTTPException(
            status_code=404,
            detail="Listing not found",
        )

    return listing

# CREATE
@router.post("/", response_model=ListingResponse)
def create_listing(
    listing: ListingCreate,
    db: Session = Depends(get_db),
):
    new_listing = Listing(
        **listing.model_dump()
    )

    db.add(new_listing)
    db.commit()
    db.refresh(new_listing)

    return new_listing


# UPDATE
@router.put("/{listing_id}", response_model=ListingResponse)
def update_listing(
    listing_id: int,
    listing: ListingUpdate,
    db: Session = Depends(get_db),
):
    db_listing = db.query(Listing).filter(
        Listing.id == listing_id
    ).first()

    if not db_listing:
        raise HTTPException(
            status_code=404,
            detail="Listing not found",
        )

    for key, value in listing.model_dump().items():
        setattr(db_listing, key, value)

    db.commit()
    db.refresh(db_listing)

    return db_listing


# DELETE
@router.delete("/{listing_id}")
def delete_listing(
    listing_id: int,
    db: Session = Depends(get_db),
):
    db_listing = db.query(Listing).filter(
        Listing.id == listing_id
    ).first()

    if not db_listing:
        raise HTTPException(
            status_code=404,
            detail="Listing not found",
        )

    db.delete(db_listing)
    db.commit()

    return {"message": "Listing deleted successfully"}