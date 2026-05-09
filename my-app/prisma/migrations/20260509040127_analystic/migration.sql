-- AlterTable
ALTER TABLE "AnalyticsEvent" ADD COLUMN     "ipAddress" TEXT,
ADD COLUMN     "productId" TEXT,
ADD COLUMN     "referrer" TEXT,
ADD COLUMN     "userAgent" TEXT;
