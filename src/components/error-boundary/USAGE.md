/**
 * Example usage of Error Boundary for components
 *
 * For small/medium components:
 * import { ErrorBoundary } from '@/components/error-boundary'
 *
 * <ErrorBoundary componentName="OrdersSummaryCard">
 *   <OrdersSummaryCard />
 * </ErrorBoundary>
 *
 * With custom fallback:
 * <ErrorBoundary
 *   componentName="OrdersSummaryCard"
 *   fallback={<div>Failed to load orders</div>}
 * >
 *   <OrdersSummaryCard />
 * </ErrorBoundary>
 *
 * With error callback:
 * <ErrorBoundary
 *   componentName="OrdersSummaryCard"
 *   onError={(error, info) => {
 *     // Send to monitoring service, log analytics, etc.
 *   }}
 * >
 *   <OrdersSummaryCard />
 * </ErrorBoundary>
 */

export const ErrorBoundaryUsageExample = () => null
