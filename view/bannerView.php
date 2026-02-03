<div class="main-banner-wrapper">
    <div class="main-banner">
        <div class="main-banner__content container-lg">

            <div class="main-banner__text">
                <h1 class="main-banner__title">
                    <?= $bannerTitle ?? '' ?>
                </h1>

                <?php if (!empty($bannerSubtitle)) : ?>
                    <h2 class="main-banner__subtitle">
                        <?= $bannerSubtitle ?>
                    </h2>
                <?php endif; ?>

                <?php if (!empty($bannerSubtitle2)) : ?>
                    <h3 class="main-banner__subtitle">
                        <?= $bannerSubtitle2 ?>
                    </h3>
                <?php endif; ?>
            </div>

            <?php if (!empty($bannerImage)) : ?>
                <div class="main-banner__image">
                    <img src="<?= $bannerImage ?>" alt="Ilustración del banner">
                </div>
            <?php endif; ?>
        </div>
    </div>
</div>

