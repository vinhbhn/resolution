import { ResolutionMethod } from './types/publicTypes';

/**
 * @internal
 */
export abstract class NamingService {
  abstract owner(domain: string): Promise<string>;
  abstract resolver(domain: string): Promise<string>;
  abstract namehash(domain: string): string;
  abstract childhash(parentHash: string, label: string): string;
  abstract isSupportedDomain(domain: string): boolean;
  abstract record(domain: string, key: string): Promise<string>;
  abstract records(domain: string, keys: string[]): Promise<Record<string, string>>;
  abstract serviceName(): ResolutionMethod;
  abstract twitter(domain: string): Promise<string>;
  abstract reverse(address: string, currencyTicker: string): Promise<string | null>;
  abstract allRecords(domain: string): Promise<Record<string, string>>;
}