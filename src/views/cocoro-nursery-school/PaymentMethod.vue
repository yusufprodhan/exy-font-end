<template>
    <section class="cocoro-section mt-5">
        <div class="section-header m-3">
            <span class="fw-bold">お支払い方法</span>
        </div>
        <hr>

        <div class="ms-3 me-3 mb-4 content-box">
            <div class="content-holder">

                <!-- payment method -->
                <div class="row custom-form-group ms-2 me-2">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        クレジット支払い
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <router-link :to="{name:'PaymentMethodSelection'}" class="border border-2 border-secondary p-1 ps-4 pe-4" type="button">
                            お支払い方法変更
                        </router-link>
                    </div>
                </div>
                <!-- /payment method -->
            </div>
        </div>
    </section>
</template>