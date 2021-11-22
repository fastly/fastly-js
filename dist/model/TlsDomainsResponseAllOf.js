"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TlsDomainData = _interopRequireDefault(require("./TlsDomainData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsDomainsResponseAllOf model module.
 * @module model/TlsDomainsResponseAllOf
 * @version 3.0.0-alpha1
 */
var TlsDomainsResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsDomainsResponseAllOf</code>.
   * @alias module:model/TlsDomainsResponseAllOf
   */
  function TlsDomainsResponseAllOf() {
    _classCallCheck(this, TlsDomainsResponseAllOf);

    TlsDomainsResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsDomainsResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsDomainsResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsDomainsResponseAllOf} obj Optional instance to populate.
     * @return {module:model/TlsDomainsResponseAllOf} The populated <code>TlsDomainsResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsDomainsResponseAllOf();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_TlsDomainData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TlsDomainsResponseAllOf;
}();
/**
 * @member {Array.<module:model/TlsDomainData>} data
 */


TlsDomainsResponseAllOf.prototype['data'] = undefined;
var _default = TlsDomainsResponseAllOf;
exports["default"] = _default;