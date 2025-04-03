"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import SkeletonFeaturedProducts from "components/placeholder/SkeletonCategory";
import FeaturedProducts from "components/homepage/featuredProducts";

export default function Page() {
  const imageStyle = {
    width: '300px',
  }
    return (
      <>
        <section>
          <div className="">
            <div className="py-10 rounded-md">
              <Suspense>
              <div className="mx-10 bg-linear-to-r from-gray-100 to-gray-50 grid grid-cols-2 lg:cols-1 items-center px-7 xl:px-16">
                <style jsx>{`
                    .width300 {
                      width: 300px;
                    }
                    paddingy {
                      padding-top: 40px;
                      padding-bottom: 40px;
                    }
                `}</style>
                <div className="order-2 lg:order-0">
                  <div className="text-center paddingy">
                    
                      <p className="mb-2 lg:mb-3 text-light dark:text-darkmode-light font-medium md:text-xl">
                        The Essence of Light
                      </p>
                    
                    <div className="row">
                      <h1 className="mb-4 lg:mb-10 col-10 sm:col-8 lg:col-12 mx-auto text-[40pt]">
                      Explore Our Crafts
                      </h1>
                    </div>
                    
                      <Link
                        className="btn sm:btn-sm btn-lg btn-primary font-medium"
                        href={`products`}
                      >
                        View Products
                      </Link>
                  
                  </div>
                </div>

                <div className="">
                  {true && (
                    <Image
                      src={'/media/products/Coffee-light.png'}
                      className="mx-auto"
                      width={300}
                      height={300}
                      style={imageStyle}
                      alt="banner image"
                      priority
                    />
                  )}
                </div>
              </div>
              </Suspense>
            </div>
          </div>
        </section>
        {/* category section  */}
        <section className="mb-6">
            <div className="text-center mb-6 md:mb-14">
              <p className="text-[30pt] mb-2">Featured Products</p>
            </div>
            <Suspense fallback={<SkeletonFeaturedProducts />}>
              <FeaturedProducts />
              
            </Suspense>
        </section>
      </>
    )
  }