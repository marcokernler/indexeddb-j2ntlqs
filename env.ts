/**
 *
 */
export function env_supported(): string | boolean {
  //
  if (!navigator.storage) {
    return 'StorateManager API not supported!';
  }

  //
  if (!navigator.storage.estimate) {
    return 'The estimate() method are not supported. Could not determine quota and usage!';
  }

  return true;
}
