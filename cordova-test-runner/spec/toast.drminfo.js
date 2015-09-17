/* globals helper */
describe('toast.drminfo', function() {
    it('should be defined as "toast.drminfo" namespace.', function() {
        expect(window.toast).toBeDefined();
        expect(window.toast.drminfo).toBeDefined();
    });
    it('should contain a "getVersion" function.', function() {
        expect(window.toast.drminfo.getVersion).toBeDefined();
        expect(typeof window.toast.drminfo.getVersion).toBe('function');
    });
    it('should contain a "getEsn" function.', function() {
        expect(window.toast.drminfo.getEsn).toBeDefined();
        expect(typeof window.toast.drminfo.getEsn).toBe('function');
    });
    it('should contain a "getSdiId" function.', function() {
        expect(window.toast.drminfo.getSdiId).toBeDefined();
        expect(typeof window.toast.drminfo.getSdiId).toBe('function');
    });
    it('should not contain a property that is not exists in the specs.', function() {
        for (var prop in toast.drminfo) {
            expect([
                'getVersion',
                'getEsn',
                'getSdiId'
            ].indexOf(prop) >= 0).toBeTruthy();
        }
    });
    describe('toast.drminfo.getVersion', function() {
        it('returns plugin version as string', function () {
            var version = '';
            toast.drminfo.getVersion(function(value){
                version = value;
            });
            expect(version).toBeDefined();
            expect(typeof version).toBe('string');
        });
        it('throws TypeError when given arguments is not matched to spec.', function() {
            // no argument
            expect(function() {
                toast.drminfo.getVersion();
            }).toThrowError(TypeError);

            // invalid type for 1st argument
            expect(function() {
                toast.drminfo.getVersion([]);
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getVersion(new Date());
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getVersion(0);
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getVersion({});
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getVersion(false);
            }).toThrowError(TypeError);

            // invalid type for 2nd argument
            expect(function() {
                toast.drminfo.getVersion(function(){}, []);
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getVersion(function(){}, new Date());
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getVersion(function(){}, 0);
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getVersion(function(){}, {});
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getVersion(function(){}, false);
            }).toThrowError(TypeError);
        });
    });
    describe('toast.drminfo.getEsn', function() {
        it('returns Esn value as string', function () {
            var esn = '';
            toast.drminfo.getEsn('WIDEVINE', function(value){
                esn = value;
            }, function(){});
            expect(esn).toBeDefined();
            expect(typeof esn).toBe('string');
        });
        it('throws TypeError when given arguments is not matched to spec.', function() {
            // no argument
            expect(function() {
                toast.drminfo.getEsn();
            }).toThrowError(TypeError);

            // invalid type for 1st argument
            expect(function() {
                toast.drminfo.getEsn([]);
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getEsn(new Date());
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getEsn(0);
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getEsn(function () {});
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getEsn({});
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getEsn(false);
            }).toThrowError(TypeError);

            // invalid type for 2nd argument
            expect(function() {
                toast.drminfo.getEsn('WIDEVINE', []);
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getEsn('WIDEVINE', new Date());
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getEsn('WIDEVINE', 0);
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getEsn('WIDEVINE', {});
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getEsn('WIDEVINE', false);
            }).toThrowError(TypeError);

            // invalid type for 3rd argument
            expect(function() {
                toast.drminfo.getEsn('WIDEVINE', function(){}, []);
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getEsn('WIDEVINE', function(){}, new Date());
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getEsn('WIDEVINE', function(){}, 0);
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getEsn('WIDEVINE', function(){}, {});
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getEsn('WIDEVINE', function(){}, false);
            }).toThrowError(TypeError);
        });
    });
    describe('toast.drminfo.getSdiId', function() {
        it('returns SDI(Samsung Device Identifier) as string', function () {
            var sdi = '';
            toast.drminfo.getSdiId(function(value){
                sdi = value;
            });
            expect(sdi).toBeDefined();
            expect(typeof sdi).toBe('string');
        });
        it('throws TypeError when given arguments is not matched to spec.', function() {
            // no argument
            expect(function() {
                toast.drminfo.getSdiId();
            }).toThrowError(TypeError);

            // invalid type for 1st argument
            expect(function() {
                toast.drminfo.getSdiId([]);
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getSdiId(new Date());
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getSdiId(0);
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getSdiId({});
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getSdiId(false);
            }).toThrowError(TypeError);

            // invalid type for 2nd argument
            expect(function() {
                toast.drminfo.getSdiId(function(){}, []);
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getSdiId(function(){}, new Date());
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getSdiId(function(){}, 0);
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getSdiId(function(){}, {});
            }).toThrowError(TypeError);
            expect(function() {
                toast.drminfo.getSdiId(function(){}, false);
            }).toThrowError(TypeError);
        });
    });
});